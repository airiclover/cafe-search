import styles from "./index.module.css";

export const Picup = () => {
  return (
    <div className={styles.btnWrap}>
      <div className={styles.title}>
        <span className={styles.spanCat}>猫</span>カフェ特集
        <span className={styles.spanArrow}>&gt;</span>
      </div>
    </div>
  );
};
