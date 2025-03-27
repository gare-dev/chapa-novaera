import styles from "@/styles/header.module.scss"
import useWindowDimensions from "@/utils/getWindowDimensions";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { FaBars } from "react-icons/fa";
import BlurredScreen from "../BlurredScreen";



interface props {

    funcOnClick?: (e: React.MouseEvent<HTMLDivElement>) => void

}

export default function HeaderAdmin(props: props) {
    const { width } = useWindowDimensions();
    const [openedSideBar, setOpenedSideBar] = useState(false)

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
                <div className={styles.subMenuSideBar}>
                    <h2 onClick={props.funcOnClick} className={styles.atag}>Início</h2>
                </div>
                <div className={styles.subMenuSideBar}>
                    <h2 onClick={props.funcOnClick} className={styles.atag}>Mensagens</h2>
                </div>
                <div className={styles.subMenuSideBar}>
                    <h2 onClick={props.funcOnClick} className={styles.atag}>Criar Usuário</h2>
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
                            <h2 onClick={props.funcOnClick} className={styles.textSubMenuSideBar}>Início</h2>
                        </div>
                        <div className={styles.subMenuSideBar}>
                            <h2 content="mensagens" onClick={props.funcOnClick} className={styles.textSubMenuSideBar}>Mensagens</h2>
                        </div>
                        <div className={styles.subMenuSideBar}>
                            <h2 content="criarUsuario" onClick={props.funcOnClick} className={styles.textSubMenuSideBar}>Criar Usuário</h2>
                        </div>
                        {/* <div className={styles.subMenuSideBar}>
                            <h2 className={styles.textSubMenuSideBar}>Equipe</h2>
                        </div>
                        <div className={styles.subMenuSideBar}>
                            <h2 className={styles.textSubMenuSideBar}>Mensagens Anônimas</h2>
                        </div>
                        <div style={{ borderBottom: "1px solid #C39152" }} className={styles.subMenuSideBar}>
                            <h2 className={styles.textSubMenuSideBar}>Amistosos</h2>
                        </div> */}

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