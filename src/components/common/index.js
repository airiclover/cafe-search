import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export function CommonLists(props) {
  const { datasLists, page, title } = props;

  console.log(page);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {datasLists.map((datasList, index) => {
        return (
          <Link href={`/${page}/${datasList.id}`} key={index}>
            <a className={styles.container}>
              <div className={styles.cardsWrap}>
                <img
                  src={datasList.photo.mobile.s}
                  alt="img"
                  className={styles.img}
                />
                <div className={styles.infWrap}>
                  <h2 className={styles.shopName}>{datasList.name}</h2>
                  <div className={styles.accessWrap}>
                    <div className={styles.imgWrap}>
                      <Image
                        src="/img/map-min-pin.svg"
                        alt="map"
                        loading="eager"
                        width={10}
                        height={10}
                        priority
                      />
                    </div>
                    <p className={styles.access}>{datasList.mobile_access}</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
}
