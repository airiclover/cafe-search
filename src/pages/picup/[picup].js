import Image from "next/image";
import { ListLayout } from "../../layouts/list/index";
import styles from "../../styles/list.module.css";

export async function getStaticProps({ params }) {
  const id = params.picup;

  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&id=${id}&format=json`
  );
  const dataListsJson = await res.json();
  const lists = dataListsJson.results.shop;
  const list = lists[0];
  return { props: { list }, revalidate: 60 * 60 };
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export default function List(list) {
  console.log("============hello==============");
  console.log(list);

  const URL = "https://maps.google.co.jp/maps?output=embed&q=";
  const lat = list.list.lat;
  const lng = list.list.lng;

  return (
    <ListLayout>
      <div className={styles.container}>
        <img src={list.list.photo.pc.l} alt="img" className={styles.img} />
        <div className={styles.letterWrap}>
          <h1 className={styles.shopName}>{list.list.name}</h1>
          <div className={styles.titleWrap}>
            <Image
              src="/img/map-min-pin.svg"
              alt="map"
              loading="eager"
              width={12}
              height={12}
              priority
            />
            <p className={styles.commonTitle}>{list.list.mobile_access}</p>
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
            <p className={styles.data}>{list.list.open}</p>
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
            <p className={styles.data}>{list.list.address}</p>
          </div>
        </div>
        <iframe className={styles.iframe} src={`${URL}${lat},${lng}`} />
      </div>
    </ListLayout>
  );
}
