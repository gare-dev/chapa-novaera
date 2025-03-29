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
import Button from "@/components/Button";

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

export const initialMessageRes: MessageRes = {
    id_message: 0,
    ip: '',
    message: '',
    name: '',
    timestamp: '',
    user_agent: '',
    visualized: false,
}



export default function Admin() {
    const router = useRouter();
    const { showAlert } = useAlert()
    const [screen, setScreen] = useState("Criar Usuário")
    const [messages, setMessages] = useState<MessageRes[]>()
    const [checked, setChecked] = useState(false)
    const [filter, setFilter] = useState("")
    const [closeInfo, setCloseInfo] = useState(false)
    const [selectedInfo, setSelectedInfo] = useState<MessageRes>()

    const [login, setLogin] = useState("")
    const [pwd, setPwd] = useState("")
    const [desc, setDesc] = useState("")

    const handleCreateUser = async () => {

        if (!login || !pwd || !desc) {
            return showAlert("Por favor, preencha todos os campos.", "warning")
        }
        try {
            const response = await Api.createUser(login, pwd, desc)

            if (response.data.code === "USER_CREATED") {
                return showAlert("Usuário criado com sucesso.", "success")
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.data.code === "INVALID_USERNAME") {
                    return showAlert("Já existe um usuário com esse nome.", "warning")
                }
            }

        }
    }


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
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.response?.data.code === "NO_DATA") {
                        showAlert("Nenhuma nova mensagem encontrada.")
                        setMessages([initialMessageRes])
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

    const markAsVisualized = async (idMessage: string, operation: boolean) => {
        try {

            const response = await Api.markAsVisualized(operation, idMessage)

            if (response.data.code === "VISUALIZED_SUCCESSFULL") {
                showAlert(`Mensagem ${operation ? "visualizada" : "desvisualizada"}  com sucesso!`)
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
                            if (item.id_message === 0) return
                            return (
                                <MensagensBox
                                    onInfoClick={() => { setSelectedInfo(item); setCloseInfo(true) }}
                                    vizuOrNot={item.visualized ? '- Visualizada' : ""}
                                    onEyeClick={() => markAsVisualized(item.id_message.toString(), !item.visualized)}
                                    key={index} message={item.message}
                                    nome={item.name ?? `Anônimo ${item.id_message}`}
                                    data={formatarData(item.timestamp)} />
                            )
                        })}
                    </div>

                </div>
            ) : screen === "Criar Usuário" ? (
                <div className={styles.divCriarUsuario}>
                    <div className={styles.criarUsuarioBox}>
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <div className={styles.inputDiv}>

                                <div className={styles.subInputDiv}>
                                    <p className={styles.caption}>Login</p>
                                    <input value={login} onChange={(e) => setLogin(e.target.value)} className={styles.input} type="text" />
                                </div>
                                <div className={styles.subInputDiv}>
                                    <p className={styles.caption}>Senha</p>
                                    <input value={pwd} onChange={(e) => setPwd(e.target.value)} className={styles.input} type="text" />
                                </div>
                                <div className={styles.subInputDiv}>
                                    <p className={styles.caption}>Descrição</p>
                                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className={styles.textarea} name="" id=""></textarea>
                                </div>
                            </div>
                        </div>
                        <div className={styles.divButton}>
                            <Button onClick={() => handleCreateUser()} style={{ height: 30, fontSize: 12 }} text="CRIAR USUÁRIO" />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                </div>
            )
            }
        </div >
    );
}