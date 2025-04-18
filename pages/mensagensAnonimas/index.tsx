import dynamic from "next/dynamic";
import styles from "@/styles/mensagemAnonimas.module.scss"
import { useState } from "react";
import Api from "@/api";
import useAlert from "@/hooks/useAlert";
import LoadingComponent from "@/components/LoadingComponent";



const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function MensagemAnonimas() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const { showAlert } = useAlert()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {

        if (!message) {
            showAlert("Por favor, preencha o campo da mensagem.", "warning")

        }

        try {
            setLoading(true)
            const response = await Api.sendMessage(name ?? "", message ?? "")

            if (response.data.code === "INSERT_SUCCESSFULL") {
                showAlert("Mensagem enviada com sucesso!", "success")
                return
            }

            showAlert("Mensagem não foi enviada, tente novamente.", "warning")

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }



    }
    return (
        <>
            <Header />
            {loading && <LoadingComponent />}
            <div className={styles.mainDiv}>
                <div className={styles.titleDiv}>
                    <p className={styles.title}>Envie uma mensagem anônima</p>

                </div>
                <div className={styles.inputDiv}>

                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome (opcional)" className={styles.inputName} type="text" />


                    <textarea value={message} onChange={(e) => {
                        if (e.target.value.length > 300) {
                            console.log("123")
                            return
                        }
                        setMessage(e.target.value)
                    }
                    } placeholder="Mensagem" className={styles.inputMessage} name="a" id=""></textarea>

                </div>
                <div className={styles.buttonDiv}>
                    <button onClick={handleSubmit} className={styles.button}>ENVIAR MENSAGEM</button>
                </div>

            </div>
        </>
    )
}