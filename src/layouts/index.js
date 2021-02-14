import styles from "./index.module.css";
import Header from "../components/header/index";
import Footer from "../components/footer/index";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
