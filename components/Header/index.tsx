import styles from "@/styles/header.module.scss"
import useWindowDimensions from "@/utils/getWindowDimensions";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { FaBars } from "react-icons/fa";
import BlurredScreen from "../BlurredScreen";
import { useRouter } from "next/router";




export default function Header() {
    const { width } = useWindowDimensions();
    const [openedSideBar, setOpenedSideBar] = useState(false)
    const router = useRouter()
    const [, startTransition] = useTransition();

    useEffect(() => {
        if (openedSideBar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openedSideBar]);

    const toggleSidebar = () => {
        startTransition(() => {
            setOpenedSideBar((prev) => !prev);
        });
    };

    function redirect(page: string) {
        router.push(`/${page}`)
    }


    if (width && width >= 806) {
        return (
            <header className={styles.header}>
                <div className={styles.imageDiv}>
                    <Image
                        alt="Logo Image"
                        src="/assets/img/img-noback.png"
                        className={styles.miniLogo}
                        width={167}
                        height={207}
                    />
                </div>
                <div>
                    <h1 onClick={() => redirect('inicio')} className={styles.atag}>Início</h1>
                </div>
                <div>
                    <h1 onClick={() => redirect('propostas')} className={styles.atag}>Propostas</h1>
                </div>
                <div>
                    <h1 onClick={() => redirect('avisos')} className={styles.atag}>Avisos</h1>
                </div>
                <div>
                    <h1 onClick={() => redirect('mensagensAnonimas')} className={styles.atag}>Canal Anônimo</h1>
                </div>
                <div>
                    <h1 onClick={() => redirect('equipe')} className={styles.atag}>Equipe</h1>
                </div>
                <div>
                    <h1 onClick={() => redirect('amistosos')} className={styles.atag}>Amistosos</h1>
                </div>
                <div>
                    <h1 onClick={() => redirect('tabelaManha')} className={styles.atag}>Tabela Manhã</h1>
                </div>

            </header>)
    } else {
        return (
            <>

                {openedSideBar && <BlurredScreen onClick={() => setOpenedSideBar(false)} />}
                <div className={`${styles.sideBarDiv} ${openedSideBar ? styles.openedSideBar : styles.closedSideBar}`}>

                    <div className={styles.divLogoMobile}>
                        <Image
                            alt="Logo Image"
                            src="/assets/img/img-noback.png"
                            className={styles.miniLogoMobileSidebar}
                            width={167}
                            height={207}
                        />
                    </div>

                    <div className={styles.menuSideBar}>
                        <div className={styles.subMenuSideBar}>
                            <h2 onClick={() => redirect('inicio')} className={styles.textSubMenuSideBar}>Início</h2>
                        </div>
                        <div className={styles.subMenuSideBar}>
                            <h2 onClick={() => redirect('propostas')} className={styles.textSubMenuSideBar}>Propostas</h2>
                        </div>
                        <div className={styles.subMenuSideBar}>
                            <h2 onClick={() => redirect('avisos')} className={styles.textSubMenuSideBar}>Avisos</h2>
                        </div>
                        <div className={styles.subMenuSideBar}>
                            <h2 onClick={() => redirect('equipe')} className={styles.textSubMenuSideBar}>Equipe</h2>
                        </div>
                        <div className={styles.subMenuSideBar}>
                            <h2 onClick={() => redirect('mensagensAnonimas')} className={styles.textSubMenuSideBar}>Mensagens Anônimas</h2>
                        </div>
                        <div style={{ borderBottom: "1px solid #C39152" }} className={styles.subMenuSideBar}>
                            <h2 onClick={() => redirect('amistosos')} className={styles.textSubMenuSideBar}>Amistosos</h2>
                        </div>
                        <div style={{ borderBottom: "1px solid #C39152" }} className={styles.subMenuSideBar}>
                            <h2 onClick={() => redirect('tabelaManha')} className={styles.textSubMenuSideBar}>Tabela Manhã</h2>
                        </div>

                    </div>
                </div>
                <header className={styles.headerMobile}>
                    <div className={styles.divSidebar}>
                        <FaBars onClick={toggleSidebar} color="#fff" size={"1.5em"} />

                    </div>

                    <div className={styles.imageDivMobile}>
                        <Image
                            alt="Logo Image"
                            src="/assets/img/img-noback.png"
                            className={styles.miniLogoMobile}
                            width={167}
                            height={207}
                        />
                    </div>

                </header>
            </>

        )
    }



}