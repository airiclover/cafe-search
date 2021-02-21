import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export function CafeLists(props) {
  const { datasLists } = props;

  // console.log(datasLists);

  return (
    <>
      {datasLists.map((datasList, index) => {
        return (
          <Link href={`/lists/${datasList.id}`} key={index}>
            <a className={styles.container}>
              <div className={styles.accessWrap}>
                <img
                  src={datasList.photo.mobile.s}
                  alt="img"
                  className={styles.img}
                />
                <div className={styles.infWrap}>
                  <h2 className={styles.shopName}>{datasList.name}</h2>
                  <div className={styles.accessWrap}>
                    <Image
                      src="/img/map-min-pin.svg"
                      alt="map"
                      loading="eager"
                      width={10}
                      height={10}
                      priority
                    />
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
