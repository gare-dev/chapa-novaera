import styles from "@/styles/messageinfo.module.scss"

interface props {
    closeClick: () => void
    idMessage: string
    data: string
    nome: string
    mensagem: string
    ip: string
    userAgent: string
}


export default function MessageInfo(props: props) {

    return (
        <div className={styles.overlay}>
            <div className={styles.mainDiv}>
                <div className={styles.boxInfo}>
                    <div className={styles.closeDiv}>
                        <p onClick={props.closeClick} className={styles.closeText}>X</p>
                    </div>
                    <div className={styles.infosDiv}>
                        <div className={styles.idAndName}>
                            <div style={{ width: "100%" }}>
                                <p className={styles.caption}>ID Message</p>
                                <input readOnly value={props.idMessage} className={styles.inputMini} type="text" />
                            </div>
                            <div style={{ width: "100%" }}>
                                <p className={styles.caption}>Data</p>
                                <input readOnly value={props.data} className={styles.inputMini} type="text" />
                            </div>

                        </div>
                        <div>
                            <p className={styles.caption}>Nome</p>
                            <input className={styles.inputIPUA} readOnly value={props.nome} type="text" name="" id="" />
                        </div>
                        <div>
                            <p className={styles.caption}>Mensagem</p>
                            <textarea readOnly value={props.mensagem} className={styles.textArea}></textarea>
                        </div>
                        <div className={styles.idAndName}>
                            <div style={{ width: "100%" }}>
                                <p className={styles.caption}>IP</p>
                                <input className={styles.inputIPUA} readOnly value={props.ip} type="text" />
                            </div>
                            <div style={{ width: "100%" }}>
                                <p className={styles.caption}>User Agent</p>
                                <input className={styles.inputIPUA} readOnly value={props.userAgent} type="text" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}