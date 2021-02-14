import Link from "next/link";
import styles from "./index.module.css";

function Search() {
  return (
    <>
      <Link href="/cafe-list">
        <a className={styles.container}>
          近くの
          <br />
          カフェ
          <br />
          を探す
        </a>
      </Link>
    </>
  );
}

export default Search;
