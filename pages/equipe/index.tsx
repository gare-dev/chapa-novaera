
import EquipeBox from "@/components/EquipeBox";
import { equipeInteira, fiscais } from "@/content/text";
import styles from "@/styles/equipepage.module.scss"
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function Equipe() {
    return (
        <>

            <Header />
            <div>
                <section className={styles.equipeDiv}>
                    <div className={styles.divEquipe}>
                        <p className={styles.nossa}>Nossa</p><p className={styles.equipe}>Equipe</p>
                    </div>
                    <div className={styles.equipeBoxDiv}>
                        {equipeInteira.map((item, index) => {
                            return (
                                <EquipeBox
                                    key={index}
                                    role={item.role}
                                    imageUrl1={item.imageUrl1}
                                    imageUrl2={item.imageUrl2}
                                    name1={item.name1}
                                    name2={item.name2}
                                    sala1={item.sala1}
                                    sala2={item.sala2}
                                />
                            )
                        })}
                    </div>
                </section>
                <section className={styles.equipeDiv}>
                    <div className={styles.divEquipe}>
                        <p className={styles.nossa}>Nossos</p><p className={styles.equipe}>Fiscais</p>
                    </div>
                    <div className={styles.equipeBoxDiv}>
                        {fiscais.map((item, index) => {
                            return (
                                <EquipeBox
                                    key={index}
                                    role={item.role}
                                    imageUrl1={item.imageUrl1}
                                    imageUrl2={item.imageUrl2}
                                    name1={item.name1}
                                    name2={item.name2}
                                    sala1={item.sala1}
                                    sala2={item.sala2}
                                />
                            )
                        })}
                    </div>
                </section>
            </div>

        </>
    )
}