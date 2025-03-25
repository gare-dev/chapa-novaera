import styles from "@/styles/equipe.module.scss"
import Image from "next/image";

export interface PropsEquipe {
    role: string
    imageUrl1: string
    imageUrl2: string
    name1: string
    name2: string
    sala1: string
    sala2: string
}


export default function EquipeBox(props: PropsEquipe) {
    return (
        <div className={styles.boxDiv} >
            <div>
                <p className={styles.roleText}>{props.role}</p>
            </div>
            <div className={styles.equipePeople}>
                <div className={styles.equipeBox}>
                    <Image
                        alt="Logo Image"
                        src={`/assets/img/${props.imageUrl1}`}
                        className={styles.image}
                        width={167}
                        height={207}
                    />
                    <div className={styles.namesDiv}>
                        <p className={styles.name}>{props.name1}</p>
                        <p className={styles.sala}>{props.sala1}</p>
                    </div>
                </div>
                <div className={styles.equipeBox}>
                    <Image
                        alt="Logo Image"
                        src={`/assets/img/${props.imageUrl2}`}
                        className={styles.image}
                        width={167}
                        height={207}
                    />
                    <div className={styles.namesDiv}>
                        <p className={styles.name}>{props.name2}</p>
                        <p className={styles.sala}>{props.sala2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}