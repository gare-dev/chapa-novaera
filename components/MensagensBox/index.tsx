
import styles from "@/styles/mensagensbox.module.scss"
import { FaInfoCircle } from "react-icons/fa"
import { MdOutlineRemoveRedEye } from "react-icons/md"

interface props {
    message: string
    nome: string
    data: string
    onEyeClick: () => void
    vizuOrNot: string
    onInfoClick: () => void
}

export default function MensagensBox(props: props) {
    return (
        <div className={styles.mainBox}>
            <div className={styles.nomeDiv}>
                <div className={styles.divNames}>
                    <p className={styles.nome}>{props.nome}</p>
                    <p className={styles.vizuOrNot}>{props.vizuOrNot}</p>
                </div>

                <div className={styles.bttDiv}>
                    <FaInfoCircle style={{ cursor: "pointer" }} onClick={props.onInfoClick} size={"2em"} />
                    <MdOutlineRemoveRedEye style={{ cursor: "pointer" }} onClick={props.onEyeClick} size={"2em"} />
                </div>



            </div>
            <div className={styles.messageDiv}>
                <p className={styles.message}>{props.message}</p>
            </div>

        </div>
    )
}