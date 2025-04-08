import styles from "@/styles/tabela.module.scss"

export interface tipo {
    id_points: string
    created_at: string
    sala: string
    vitorias: number
    derrotas: number
    empates: number
    pontos: number
    temporada: number
    jogos: number
}


interface props {
    data: tipo[]

}


export default function Tabela(props: props) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.headerTabela}>
                <div className={styles.headerTitleCurso}>
                    <p className={styles.color}>CURSO</p>
                </div>
                <div className={styles.headerTitleDiv}>
                    <p className={styles.color}>P</p>
                    <p className={styles.color}>J</p>
                    <p className={styles.color}>V</p>
                    <p className={styles.color}>D</p>
                    <p className={styles.color}>E</p>
                </div>
            </div>

            {props.data.map((item, index) => {
                return (
                    <div style={index % 2 == 0 ? { backgroundColor: "#131312" } : { backgroundColor: "#1E1E1E" }} key={index} className={styles.positionDiv}>
                        <div className={styles.titlesDiv}>
                            <div className={styles.divCurso}>
                                <p style={{ width: 30 }} className={styles.textTable}>{index + 1}</p>
                                <p className={styles.textTable}>{item.sala}</p>
                            </div>
                            <div className={styles.pointsDiv}>
                                <p style={{ fontWeight: 800 }} className={styles.textPoint}>{item.pontos}</p>
                                <p className={styles.textPoint}>{item.jogos}</p>
                                <p className={styles.textPoint}>{item.vitorias}</p>
                                <p className={styles.textPoint}>{item.derrotas}</p>
                                <p className={styles.textPoint}>{item.empates}</p>
                            </div>
                        </div>


                    </div>
                )
            })}


        </div>
    )
}