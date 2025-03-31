import AvisoBox from "@/components/AvisoBox";
import dynamic from "next/dynamic";
import styles from "@/styles/avisos.module.scss"
import Api from "@/api";
import { useEffect, useState } from "react";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

interface Avisos {
    title: string,
    message: string,
    data: string,
}

export default function Avisos() {
    const [avisos, setAvisos] = useState<Avisos[]>()
    const { showAlert } = useAlert()

    const handleGetAvisos = async () => {

        try {

            const response = await Api.getAvisos()

            if (response.data.code === "AVISOS_SUCCESSFULL") {
                setAvisos(response.data.data)
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.data.code === "NOAVISOS_FOUND") {
                    return showAlert("Nenhum aviso encontrado.", "warning")
                }
            }
            showAlert("Erro incomum, avise a chapa NOVA ERA")
        }
    }

    useEffect(() => {
        handleGetAvisos()
    }, [])

    return (
        <>
            <Header />

            <div className={styles.mainDiv}>
                {avisos?.map((item, index) => {
                    return (
                        <AvisoBox key={index} data={item.data} message={item.message} title={item.title} />
                    )
                })}
            </div>
        </>)
}