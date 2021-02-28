import Image from "next/image";
import styles from "./index.module.css";

export const Search = (props) => {
  const { btnData } = props;
  // console.log(btnData);

  return (
    <>
      <button className={styles.container} onClick={btnData}>
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
      </button>
    </>
  );
};
