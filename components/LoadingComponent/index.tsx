import styles from "@/styles/loadingcomponent.module.scss";

export default function LoadingComponent() {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.loader}>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__ball}></div>
            </div>
        </div>

    );
};

