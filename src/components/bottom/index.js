import styles from "./index.module.css";
import Image from "next/image";

export function Bottom() {
  return (
    <>
      <div className={styles.container}>
        <Image
          // src="/img/footprint.png"
          src="/img/footprint0.png"
          alt="cat logo"
          loading="eager"
          width={230}
          height={230}
          priority
        />
      </div>
    </>
  );
}
