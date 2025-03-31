import styles from "@/styles/input.module.scss"
interface props {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    isMini?: boolean
    readonly?: boolean
    maxLength?: number
    type?: string
    style?: React.CSSProperties
}

export default function Input(props: props) {
    return !props.isMini ? (
        <input style={props.style} maxLength={props.maxLength} readOnly={props.readonly} value={props.value} onChange={props.onChange} type={props.type} className={styles.input} />
    ) : (
        <input style={{ width: "50%" }} value={props.value} onChange={props.onChange} type="text" className={styles.input} />
    )
}

