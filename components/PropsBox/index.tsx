import styles from "@/styles/props.module.scss"
import { IconType } from "react-icons"

export interface PropsProps {
    icon: IconType
    title: string
    text: string
}

export default function PropsBox(props: PropsProps) {

    return (
        <div className={styles.mainBox}>
            <div className={styles.iconAndTitle}>
                <div>
                    <props.icon size={32} color="#fff" />
                </div>
                <div className={styles.divTitle}>
                    <p className={styles.title}>{props.title}</p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", height: "80%", width: "100%" }}>
                <div className={styles.textDiv}>
                    <p className={styles.textProps}>{props.text}</p>
                </div>
            </div>

        </div>
    )
}