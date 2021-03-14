import Image from "next/image";
import { ListLayout } from "../../layouts/list/index";
import styles from "../../styles/list.module.css";

// ページの内容が毎回のリクエストで変化するページのため、SSRにて対応
export async function getServerSideProps({ params }) {
  const id = params.list;
  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&id=${id}&format=json`
  );
  const json = await res.json();
  const lists = json.results.shop;
  return { props: { lists } };
}

export default function List(lists) {
  const URL = "https://maps.google.co.jp/maps?output=embed&q=";
  const lat = lists.lists[0].lat;
  const lng = lists.lists[0].lng;

  return (
    <ListLayout>
      <div className={styles.container}>
        <img src={lists.lists[0].photo.pc.l} alt="img" className={styles.img} />
        <div className={styles.letterWrap}>
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
        </div>
        <iframe className={styles.iframe} src={`${URL}${lat},${lng}`} />
      </div>
    </ListLayout>
  );
}
