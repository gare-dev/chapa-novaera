

import Api from "@/api";
import Tabela, { tipo } from "@/components/Tabela";
import useAlert from "@/hooks/useAlert";
import styles from "@/styles/tabelamanha.module.scss"
import { AxiosError } from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export type responseTable = {
    id_points: string
    created_at: string
    sala: string
    vitorias: number
    derrotas: number
    empates: number
    pontos: number
    temporada: number
    jogos: number
}

export default function TabelaManha() {

    const [data, setData] = useState<tipo[]>([])
    const { showAlert } = useAlert()


    const handleTable = async () => {

        try {
            const response = await Api.listTableM(1)
            setData(response.data.data)
        } catch (error) {
            if (error instanceof AxiosError) {
                showAlert(error.response?.data.message, "danger")
            }
        }
    }

    useEffect(() => {
        handleTable()
    }, [])
    return (
        <div>
            <Header />

            <div className={styles.divTabela}>
                <Tabela data={data} />

            </div>
        </div>
    )
}