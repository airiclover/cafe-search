import styles from "./index.module.css";
import Image from "next/image";

export function DynamicRouteCmp(props) {
  const { datasLists, url, lat, lng } = props;

  return (
    <div className={styles.container}>
      <img src={datasLists.list.photo.pc.l} alt="img" className={styles.img} />
      <div className={styles.letterWrap}>
        <h1 className={styles.shopName}>{datasLists.list.name}</h1>
        <div className={styles.titleWrap}>
          <Image
            src="/img/map-min-pin.svg"
            alt="map"
            loading="eager"
            width={12}
            height={12}
            priority
          />
          <p className={styles.commonTitle}>{datasLists.list.mobile_access}</p>
        </div>

        <div className={styles.commonWrap}>
          <div className={styles.titleWrap}>
            <Image
              src="/img/clock-min.svg"
              alt="map"
              loading="eager"
              width={12}
              height={12}
              priority
            />
            <p className={styles.commonTitle}>open</p>
          </div>
          <p className={styles.data}>{datasLists.list.open}</p>
        </div>

        <div className={styles.commonWrap}>
          <div className={styles.titleWrap}>
            <Image
              src="/img/home-min.svg"
              alt="map"
              loading="eager"
              width={12}
              height={12}
              priority
            />
            <p className={styles.commonTitle}>address</p>
          </div>
          <p className={styles.data}>{datasLists.list.address}</p>
        </div>
      </div>
      <iframe className={styles.iframe} src={`${url}${lat},${lng}`} />
    </div>
  );
}
