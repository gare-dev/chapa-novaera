import Api from "@/api";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/admin.module.scss"
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import MensagensBox from "@/components/MensagensBox";
import { IoMdRefresh } from "react-icons/io";
import MessageInfo from "@/components/MessageInfo";

const HeaderAdmin = dynamic(() => import("@/components/HeaderAdmin"), { ssr: false });

export interface MessageRes {
    id_message: number
    message: string
    name: string
    ip: string
    user_agent: string
    timestamp: string
    visualized: boolean
}


export default function Admin() {
    const router = useRouter();
    const { showAlert } = useAlert()
    const [screen, setScreen] = useState("")
    const [messages, setMessages] = useState<MessageRes[]>()
    const [checked, setChecked] = useState(false)
    const [filter, setFilter] = useState("")
    const [closeInfo, setCloseInfo] = useState(true)
    const [selectedInfo, setSelectedInfo] = useState<MessageRes>()


    const handleCheckPermission = async () => {
        try {
            const response = await Api.checkPermission()

            if (response.data.auth === true) {
                return
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.data.auth === false) {
                    showAlert("Access Denied", "danger")
                    router.push('/login')
                }
            }
        }
    }



    const handle = async () => {
        if (screen === "Início") {
            router.push("/inicio")

        } else if (screen === "Mensagens") {
            try {
                const response = await Api.getMessages(checked, filter)
                if (response.data.code === "LIST_SUCCESSFULL") {
                    setMessages(response.data.data)
                }
                console.log(response.data.data)
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.response?.data.code === "NO_DATA") {
                        showAlert("Nenhuma mensagem encontrada.")
                    }
                }
            }
        }
    }

    useEffect(() => {
        handle()
    }, [screen])

    useEffect(() => {
        handleCheckPermission()
    }, [])

    const markAsVisualized = async (idMessage: string) => {
        try {

            const response = await Api.markAsVisualized(true, idMessage)

            if (response.data.code === "VISUALIZED_SUCCESSFULL") {
                showAlert("Mensagem visualizada com sucesso!")
                handle()
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                switch (error.response?.data.code) {
                    case ("INVALID_OPERATION"):
                        showAlert("Operação inválida.", "warning")
                    case ("ERROR"):
                        showAlert("Não foi possível marcar está mensagem como visualizada.")
                    case ("VISUALIZED_ERROR"):
                        showAlert("Erro bizarro, chame o Garé")
                }
            }
        }
    }

    function formatarData(dataString: string) {
        const data = new Date(dataString);
        return data.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    return (
        <div>
            {closeInfo && <MessageInfo
                data={formatarData(selectedInfo?.timestamp ?? "")}
                idMessage={selectedInfo?.id_message.toString() ?? ""}
                closeClick={() => setCloseInfo((false))}
                ip={selectedInfo?.ip ?? ""}
                mensagem={selectedInfo?.message ?? ""}
                nome={selectedInfo?.name ?? ""}
                userAgent={selectedInfo?.user_agent ?? ""}
            />}

            <HeaderAdmin funcOnClick={(e) => setScreen(e.currentTarget.innerText)} />
            {screen === "Mensagens" ? (

                <div className={styles.divMensagens}>


                    <div className={styles.divTools}>
                        <IoMdRefresh onClick={handle} size={"1.5em"} color={"#fff"} />
                        <div className={styles.seeVisuDiv}>
                            <input checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" />
                            <p className={styles.seeVisuText}>Ver Visualizados</p>
                        </div>
                        <div className={styles.filterDiv}>
                            <input value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.inputFilter} type="text" />
                            <button onClick={handle} className={styles.filterBtt}>BUSCAR</button>
                        </div>

                    </div>

                    <div className={styles.mensagensBox}>
                        {messages?.map((item, index) => {
                            return (
                                <MensagensBox
                                    onInfoClick={() => { setSelectedInfo(item); setCloseInfo(true) }}
                                    vizuOrNot={item.visualized ? '- Visualizada' : ""}
                                    onEyeClick={() => markAsVisualized(item.id_message.toString())}
                                    key={index} message={item.message}
                                    nome={item.name ?? `Anônimo ${item.id_message}`}
                                    data={formatarData(item.timestamp)} />
                            )
                        })}
                    </div>

                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
}