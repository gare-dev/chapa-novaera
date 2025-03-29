import styles from "@/styles/button.module.scss"


interface props {
    onClick?: () => void
    style?: React.CSSProperties;
    text: string
}

export default function Button(props: props) {
    return (
        <button className={styles.button} style={props.style} onClick={props.onClick}>{props.text}</button>
    )
}