import styles from "./index.module.css";
import { Header } from "../components/header/index";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
}
