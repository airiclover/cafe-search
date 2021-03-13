import styles from "./index.module.css";
export function Loading() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loading}>loading...</div>
        <img className={styles.imgTop} src="/img/footprint.png" />
        <img className={styles.imgBottom} src="/img/footprint.png" />
      </div>
    </>
  );
}
