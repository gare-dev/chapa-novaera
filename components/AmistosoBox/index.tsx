
import styles from "@/styles/amistosobox.module.scss"

interface props {
    title: string
    curso: string
    curso_adversario: string
    aprovado: boolean
    isThereMatch: boolean
    createMatch: () => void
}

export default function AmistosoBox(props: props) {
    return (
        <div className={styles.amistosoBoxDiv}>
            <div className={styles.titleDiv}>
                <p className={styles.titleText}>{props.title}</p>
            </div>
            <div onClick={props.isThereMatch ? undefined : props.createMatch} className={styles.teamsDiv}>
                <p className={styles.teamsText}>{props.isThereMatch ? `${props.curso} X ${props.curso_adversario}` : "MARCAR AMISTOSO"}</p>
            </div>
            <div className={styles.aprovadoDiv}>
                {props.isThereMatch ? props.aprovado ? <p style={{ color: "green" }} className={styles.aprovadoText}>APROVADO</p> : <p style={{ color: "red" }} className={styles.aprovadoText}>AGUARDANDO APROVAÇÃO</p> : <p className={styles.aprovadoText}>VAZIO</p>}
            </div>
        </div>
    )
}