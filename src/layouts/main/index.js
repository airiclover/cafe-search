import styles from "./index.module.css";

export function MainLayout({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
