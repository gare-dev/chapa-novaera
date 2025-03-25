import dynamic from "next/dynamic";
import styles from "@/styles/propostas.module.scss"
import PropsBigBox from "@/components/PropsBigBox";
import { propostas } from "@/content/text";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function Propostas() {
    return (
        <>
            <Header />

            <section className={styles.mainSection}>
                <div className={styles.titleDiv}>
                    <p className={styles.titleText}>Propostas</p>
                </div>
                <div className={styles.propsDiv}>
                    {propostas.map((item, index) => {
                        return (
                            <PropsBigBox icon={item.icon} title={item.title} par1={item.par1} par2={item.par2} par3={item.par3} key={index} />

                        )
                    })}

                </div>
            </section>
        </>
    )
}