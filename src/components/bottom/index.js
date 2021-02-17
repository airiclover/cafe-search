import styles from "./index.module.css";
import Image from "next/image";




export function Bottom() {

  return (
    <>
      <div className={styles.container}>
        <Image
          src="/img/arrow-up.svg"
          alt="cat logo"
          loading="eager"
          width={35}
          height={35}
          priority
        />
        <p>touch me!</p>
      </div>
    </>
  );
}
