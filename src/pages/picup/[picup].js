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
  return { props: { lists } };
}

export async function getStaticPaths() {
  const keywords = ["ゆっくり"];
  // const keywords = ["ゆっくり", "ゆったり", "おしゃれ", "コーヒー", "猫"];
  const key = Math.floor(Math.random() * keywords.length);
  const utf8Key = unescape(encodeURIComponent(keywords[key]));

  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&genre=G014&keyword=${utf8Key}&count=20&format=json`
  );
  const json = await res.json();
  const datasLists = json.results.shop;
  const paths = datasLists.map((picup) => `/picup/${picup.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default function List(lists) {
  const URL = "https://maps.google.co.jp/maps?output=embed&q=";
  const lat = lists.lists[0].lat;
  const lng = lists.lists[0].lng;

  return (
    <>
      <ListLayout>
        <img src={lists.lists[0].photo.pc.l} alt="img" className={styles.img} />
        <h1 className={styles.shopName}>{lists.lists[0].name}</h1>
        <div className={styles.accessWrap}>
          <Image
            src="/img/map-min-pin.svg"
            alt="map"
            loading="eager"
            width={10}
            height={10}
            priority
          />
          <p className={styles.access}>{lists.lists[0].mobile_access}</p>
        </div>
        <p className={styles.title}>【営業時間】</p>
        <p className={styles.common}>{lists.lists[0].open}</p>
        <p className={styles.title}>【住所】</p>
        <p className={styles.common}>{lists.lists[0].address}</p>
        <iframe className={styles.iframe} src={`${URL}${lat},${lng}`}></iframe>
      </ListLayout>
    </>
  );
}
