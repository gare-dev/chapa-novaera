import Api from "@/api";
import useAlert from "@/hooks/useAlert";
import styles from "@/styles/login.module.scss"
import { AxiosError } from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";


const Header = dynamic(() => import("@/components/Header"), { ssr: false });


export default function Login() {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const { showAlert } = useAlert()
    const router = useRouter()

    const handleSubmit = async () => {

        if (!login || !password) {
            return showAlert("Por favor, preencha todos os campos,", "warning")
        }

        try {
            const response = await Api.login(login, password)

            if (response.data.auth === true) {
                localStorage.setItem("token", response.data.token)
                router.push('/admin')
            }

            console.log(response)
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.data.code === "WRONG_INFO") {
                    showAlert("Login ou Senha incorretos.", "danger")
                }
            }

        }



    }

    return (
        <>
            <Header />
            <div className={styles.mainDiv}>

                <div className={styles.loginBox}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Image
                            alt="Logo Image"
                            src="/assets/img/img-noback.png"
                            className={styles.miniLogo}
                            width={167}
                            height={207}
                        />
                    </div>

                    <div className={styles.inputsDiv}>
                        <div>
                            <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" className={`${styles.input}`} type="text" />
                        </div>
                        <div>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" className={`${styles.input}`} type="password" />
                        </div>
                    </div>

                    <div className={styles.buttonDiv}>
                        <button onClick={handleSubmit} className={styles.button}>ENTRAR</button>
                    </div>
                </div>

            </div>
        </>
    )
}