import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export function Search() {
  return (
    <>
      <Link href="/cafe-list">
        <a className={styles.container}>
          <div className={styles.btnMsg}>
            近くの
            <br />
            カフェ
            <br />
            を探す
          </div>
          <Image
            src="/img/map-pin.svg"
            alt="cat logo"
            loading="eager"
            width={110}
            height={110}
            priority
          />
        </a>
      </Link>
    </>
  );
}
