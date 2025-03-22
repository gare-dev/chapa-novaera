
import styles from "@/styles/inicio.module.scss"
import Image from "next/image";
import dynamic from "next/dynamic";
import PropsBox from "@/components/PropsBox";
import { principaisPropostas } from "@/content/text";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function Inicio() {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.sectionDiv}>
                    <div className={styles.divStyles}>
                        <div className={styles.textDiv}>
                            <div>
                                <h2 className={styles.chapaEra}>CHAPA ERA</h2>
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

            </section>
        </>
    )
}