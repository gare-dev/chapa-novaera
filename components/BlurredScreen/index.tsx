import styles from "@/styles/header.module.scss"

const BlurredScreen = ({ onClick }: { onClick: () => void }) => {
    return <div onClick={onClick} className={styles.blurredScreen}></div>;
};


export default BlurredScreen