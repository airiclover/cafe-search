import styles from "./index.module.css";
import Image from "next/image";

export function Top() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Anytime
          <br />
          Anywhere
          <br />
          Coffee break
        </h1>
        <Image
          src="/img/cat.png"
          alt="cat logo"
          loading="eager"
          width={80}
          height={130}
          priority
        />
      </div>
    </>
  );
}
