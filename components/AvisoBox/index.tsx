import styles from "@/styles/avisobox.module.scss"

interface props {
    title: string
    message: string
    data: string
}

export default function AvisoBox(props: props) {

    function formatDateTime(dateStr: string) {
        const dateObj = new Date(dateStr);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');


        return `${day}/${month}/${year}, ${hours}:${minutes}`;
    }
    return (
        <div className={styles.boxAviso}>
            <div className={styles.titleDiv}>
                <p className={styles.title}>{props.title}</p>
            </div>
            <div className={styles.dataDiv}>
                <p className={styles.dataText}>{formatDateTime(props.data)}</p>
            </div>


            <div className={styles.messageDiv}>
                <p className={styles.message}>{props.message}</p>
            </div>

        </div>
    )
}