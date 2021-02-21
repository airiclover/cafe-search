import { ListLayout } from "../../layouts/list/index";
import styles from "../../styles/list.module.css";

export async function getStaticProps({ params }) {
  const id = params.list;

  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&id=${id}&format=json`
  );

  const json = await res.json();
  const lists = json.results.shop;
  return { props: { lists } };
}

export async function getStaticPaths() {
  const LAT = 35.66922;
  const LNG = 139.761457;

  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${LAT}&lng=${LNG}&genre=G014&format=json`
  );

  const json = await res.json();
  const lists = json.results.shop;
  const paths = lists.map((list) => `/lists/${list.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default function List(lists) {
  // console.log(lists);
  return (
    <>
      <ListLayout>
        <img src={lists.lists[0].photo.pc.l} alt="img" className={styles.img} />
        <h1>POST(投稿){lists.lists[0].id}</h1>
        <h2>{lists.lists[0].name}</h2>
      </ListLayout>
    </>
  );
}
