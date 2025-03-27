import dynamic from "next/dynamic";
import styles from "@/styles/mensagemAnonima.module.scss"
import { useState } from "react";
import Api from "@/api";
import useAlert from "@/hooks/useAlert";



const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function MensagemAnonima() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const { showAlert } = useAlert()

    const handleSubmit = async () => {

        try {
            const response = await Api.sendMessage(name ?? "", message ?? "")

            if (response.data.code === "INSERT_SUCCESSFULL") {
                showAlert("Mensagem enviada com sucesso!", "success")
                return
            }

            showAlert("Mensagem não foi enviada, tente novamente.", "warning")

        } catch (error) {
            console.log(error)
        }


    }
    return (
        <>
            <Header />

            <div className={styles.mainDiv}>
                <div className={styles.titleDiv}>
                    <p className={styles.title}>Envie uma mensagem anônima</p>

                </div>
                <div className={styles.inputDiv}>

                    <input onChange={(e) => setName(e.target.value)} placeholder="Nome (opcional)" className={styles.inputName} type="text" />


                    <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem" className={styles.inputMessage} name="a" id=""></textarea>

                </div>
                <div className={styles.buttonDiv}>
                    <button onClick={handleSubmit} className={styles.button}>ENVIAR MENSAGEM</button>
                </div>

            </div>
        </>
    )
}