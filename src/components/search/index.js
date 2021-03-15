import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export const Search = () => {
  return (
    <Link href="/lists">
      <a className={styles.container}>
        <button className={styles.btn}>
          <div className={styles.container}>
            <div className={styles.btnMsg}>
              近くの
              <br />
              <span className={styles.cafe}>カフェ</span>
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
          </div>
        </button>
      </a>
    </Link>
  );
};
