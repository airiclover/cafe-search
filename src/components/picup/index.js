import Image from "next/image";
import styles from "./index.module.css";

export const Picup = () => {
  return (
    <div className={styles.btnWrap}>
      <div className={styles.container}>
        <div className={styles.title}>猫カフェ特集</div>
        <Image
          src="/img/catfot.png"
          alt="catfot logo"
          loading="eager"
          width={40}
          height={40}
          priority
        />
      </div>
    </div>
  );
};
