import styles from "@/styles/bigbox.module.scss"
import { IconType } from "react-icons"

export interface PropsBigBox {
    icon: IconType
    title: string
    par1?: string
    par2?: string
    par3?: string

}

export default function PropsBigBox(props: PropsBigBox) {
    return (
        <div className={styles.bigBoxDiv}>
            <div className={styles.titleDiv}>
                <props.icon size={50} color="#fff" />
                <p className={styles.titleText}>{props.title}</p>
            </div>
            <div className={styles.textDiv}>
                <p className={styles.text}>{props.par1}</p>
                <p className={styles.text}>{props.par2}</p>
                <p className={styles.text}>{props.par3}</p>
            </div>
        </div>
    )
}