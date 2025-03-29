import styles from "@/styles/bigbox.module.scss"
import { IconType } from "react-icons"

export interface PropsBigBox {
    icon: IconType
    title: string
    par1?: string
    par2?: string
    par3?: string
    par4?: string
    par5?: string
    par6?: string
    principal?: boolean


}

export default function PropsBigBox(props: PropsBigBox) {
    return (
        <div style={props.principal === true ? { width: "93%" } : { width: "45%" }} className={styles.bigBoxDiv}>
            <div className={styles.titleDiv}>
                <props.icon size={50} color="#c39152" />
                <p className={styles.titleText}>{props.title}</p>
            </div>
            <div className={styles.textDiv}>
                <p className={styles.text}>{props.par1}</p>
                <p className={styles.text}>{props.par2}</p>
                <p className={styles.text}>{props.par3}</p>
                <p className={styles.text}>{props.par4}</p>
                <p className={styles.text}>{props.par5}</p>
                <p className={styles.text}>{props.par6}</p>
            </div>
        </div>
    )
}