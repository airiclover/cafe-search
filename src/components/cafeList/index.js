import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";

export default function CafeList() {
  // memo
  // 親からprops受け取る
  // API叩く
  // useStateを定義、useEffectを利用
  // して上記実装する

  return (
    <>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.container}
        r
      >
        <Image
          src="/img/cat.png"
          alt="image"
          loading="eager"
          width={140}
          height={140}
          priority
        />
        <div className={styles.infoWrap}>
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
