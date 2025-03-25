
import styles from "@/styles/inicio.module.scss"
import Image from "next/image";
import dynamic from "next/dynamic";
import PropsBox from "@/components/PropsBox";
import { equipe, principaisPropostas } from "@/content/text";
import EquipeBox from "@/components/EquipeBox";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function Inicio() {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.sectionDiv}>
                    <div className={styles.divStyles}>
                        <div className={styles.textDiv}>
                            <div style={{ paddingBottom: 25 }}>
                                <h2 className={styles.chapaEra}>CHAPA NOVA ERA</h2>
                            </div>
                            <div className={styles.divSlogan}>
                                <h2 className={styles.slogan}>ESCUTAR,</h2>
                                <h2 className={styles.slogan}>REPRESENTAR,</h2>
                                <h2 className={styles.slogan}>APLICAR.</h2>
                            </div>
                            <div className={styles.buttonDiv}>
                                <button className={styles.button}>VEJA TODAS NOSSAS PROPOSTAS</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.logoDiv}>
                        <Image
                            alt="Logo Image"
                            src="/assets/img/img-noback.png"
                            className={styles.miniLogo}
                            width={167}
                            height={207}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.propostasDiv} style={{ marginTop: 40 }}>

                <div className={styles.divTitle}>
                    <p className={styles.principais}>Principais</p><p className={styles.propostas}>Propostas</p>
                </div>
                <div className={styles.propsBoxDiv}>

                    {principaisPropostas.map((item, index) => {
                        return (
                            <PropsBox icon={item.icon} text={item.text} title={item.title} key={index} />
                        )
                    })}

                </div>

                <div className={styles.allPropsDiv}>
                    <button className={styles.propsButton}>TODAS PROPOSTAS</button>
                </div>

            </section>

            <section className={styles.equipeDiv}>
                <div className={styles.divEquipe}>
                    <p className={styles.nossa}>Nossa</p><p className={styles.equipe}>Equipe</p>
                </div>
                <div className={styles.equipeBoxDiv}>
                    {equipe.map((item, index) => {
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
        </>
    )
}