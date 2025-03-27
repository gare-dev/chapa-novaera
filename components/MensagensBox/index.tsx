import styles from "@/styles/mensagensbox.module.scss"

interface props {
    message: string
    nome: string
    data: string
}

export default function MensagensBox(props: props) {
    return (
        <div className={styles.mainBox}>
            <div className={styles.nomeDiv}>
                <p className={styles.nome}>{props.nome}</p>
                <p style={{ color: "#fff" }} className={styles.nome}>{props.data}</p>
            </div>
            <div className={styles.messageDiv}>
                <p className={styles.message}>{props.message}</p>
            </div>

        </div>
    )
}