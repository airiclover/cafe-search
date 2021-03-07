import Image from "next/image";
import { ListLayout } from "../../layouts/list/index";
import styles from "../../styles/list.module.css";

export async function getStaticProps({ params }) {
  const id = params.picup;

  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&id=${id}&format=json`
  );
  const dataListsJson = await res.json();
  const lists = dataListsJson.results.shop;
  return { props: { lists }, revalidate: 60 * 60 };
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export default function List(lists) {
  const URL = "https://maps.google.co.jp/maps?output=embed&q=";
  const lat = lists.lists[0].lat;
  const lng = lists.lists[0].lng;

  return (
    <ListLayout>
      <img src={lists.lists[0].photo.pc.l} alt="img" className={styles.img} />
      <h1 className={styles.shopName}>{lists.lists[0].name}</h1>
      <div className={styles.titleWrap}>
        <Image
          src="/img/map-min-pin.svg"
          alt="map"
          loading="eager"
          width={12}
          height={12}
          priority
        />
        <p className={styles.commonTitle}>{lists.lists[0].mobile_access}</p>
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
        <p className={styles.data}>{lists.lists[0].open}</p>
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
        <p className={styles.data}>{lists.lists[0].address}</p>
      </div>
      <iframe className={styles.iframe} src={`${URL}${lat},${lng}`}></iframe>
    </ListLayout>
  );
}
