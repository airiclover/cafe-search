import styles from "./index.module.css";

export function ListLayout({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
