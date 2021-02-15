import Image from "next/image";
import styles from "./index.module.css";

export default function CafeList() {
  return (
    <>
      <a href="/" className={styles.container} r>
        <Image
          src="/img/cat.png"
          alt="image"
          loading="eager"
          width={140}
          height={140}
          priority
        />
        <div  className={styles.infoWrap}>
          <h2 className={styles.shopName}>
            猫カフェ猫カフェ猫カフェ猫カフェ猫カフェ猫カフェ
          </h2>
          <div className={styles.accessWrap}>
            <Image
              src="/img/map-min-pin.svg"
              alt="map"
              loading="eager"
              width={10}
              height={10}
              priority
            />
            <p className={styles.access}>
              猫駅から徒歩5分猫駅から徒歩5分猫駅から徒歩5分猫駅から徒歩5分
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
