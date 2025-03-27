import Api from "@/api";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/admin.module.scss"
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import MensagensBox from "@/components/MensagensBox";

const HeaderAdmin = dynamic(() => import("@/components/HeaderAdmin"), { ssr: false });

export interface MessageRes {
    id_message: number
    message: string
    name: string
    ip: string
    user_agent: string
    timestamp: string
}


export default function Admin() {
    const router = useRouter();
    const { showAlert } = useAlert()
    const [screen, setScreen] = useState("")
    const [messages, setMessages] = useState<MessageRes[]>()


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

    useEffect(() => {
        handleCheckPermission()
    }, [])

    useEffect(() => {

        const handle = async () => {
            if (screen === "Início") {
                router.push("/inicio")

            } else if (screen === "Mensagens") {
                try {
                    const response = await Api.getMessages()
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

        handle()

    }, [screen])

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
            <HeaderAdmin funcOnClick={(e) => setScreen(e.currentTarget.innerText)} />
            {screen === "Mensagens" ? (
                <div className={styles.divMensagens}>

                    <div className={styles.mensagensBox}>
                        {messages?.map((item, index) => {
                            return (
                                <MensagensBox key={index} message={item.message} nome={item.name ?? `Anônimo ${item.id_message}`} data={formatarData(item.timestamp)} />
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