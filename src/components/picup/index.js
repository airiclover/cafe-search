import Link from "next/link";
import styles from "./index.module.css";

export const Picup = () => {
  return (
    <Link href="/picupCafe">
      <a className={styles.container}>
        <div className={styles.btnWrap}>
          <div className={styles.title}>
            <span className={styles.spanCat}>猫</span>カフェ特集
            <span className={styles.spanArrow}>&gt;</span>
          </div>
        </div>
      </a>
    </Link>
  );
};
