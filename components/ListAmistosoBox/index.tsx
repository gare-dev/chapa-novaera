import styles from "@/styles/listamistosobox.module.scss"
import { useState } from "react"
import Input from "../Input"
import Button from "../Button"
import Api from "@/api"
import useAlert from "@/hooks/useAlert"


interface props {
    aprovado: boolean
    curso: string
    curso_adversario: string
    id_match: string
    marcado_por: string
    data: string
    periodo: string
    getMatches: () => Promise<void>

}



export default function ListAmistosoBox(props: props) {
    const [matchInfo, setMatchInfo] = useState(false)
    const { showAlert } = useAlert()

    const handleAprovar = async () => {
        try {
            const response = await Api.aproveMatch(props.id_match)

            if (response.data.code === "MATCH_APROVED") {
                props.getMatches()
                setMatchInfo(false)
                return showAlert('Partida aprovada com sucesso.', 'success')
            }


        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <div className={styles.mainBox}>
                <div onClick={() => setMatchInfo(true)} className={styles.bttAprovarDiv}>
                    <p className={styles.aprovarBtt}>{props.aprovado ? "INFORMAÇÕES" : "APROVAR"}</p>
                </div>
                <div className={styles.matchDiv}>
                    <p className={styles.matchText}>{props.curso} X {props.curso_adversario}</p>
                </div>

                <div className={styles.aprovadoBox}>
                    <p style={props.aprovado ? { color: "green" } : { color: "red" }} className={styles.aprovadoText}>{props.aprovado ? 'APROVADO' : 'AGUARDANDO APROVAÇÃO'}</p>
                </div>

            </div>
            {matchInfo && (
                <div className={styles.overlay}>
                    <div className={styles.mainDiv}>
                        <div className={styles.mainInputDiv}>
                            <div className={styles.inputDiv}>
                                <p className={styles.caption}>MARCADO POR</p>
                                <Input value={props.marcado_por} style={{ width: "95%" }} />
                            </div>
                            <div className={styles.inputDiv}>
                                <p className={styles.caption}>DATA</p>
                                <Input value={props.data.substring(0, 10)} style={{ width: "95%" }} />
                            </div>
                            <div className={styles.inputDiv}>
                                <p className={styles.caption}>TIMES</p>
                                <Input value={`${props.curso} X ${props.curso_adversario}`} style={{ width: "95%" }} />
                            </div>
                            <div className={styles.inputDiv}>
                                <p className={styles.caption}>PERIODO</p>
                                <Input value={props.periodo} style={{ width: "95%" }} />
                            </div>
                        </div>
                        <div className={styles.buttonDiv}>
                            <Button onClick={() => props.aprovado ? setMatchInfo(false) : handleAprovar()} text={props.aprovado ? "FECHAR" : "APROVAR"} />
                        </div>


                    </div>
                </div>
            )}
        </>
    )
}