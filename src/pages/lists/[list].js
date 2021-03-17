import { ListLayout } from "../../layouts/list/index";
import { DynamicRouteCmp } from "../../components/dynamicRouteCmp";

// ページの内容が毎回のリクエストで変化するページ。勉強もかねてSSRにて実装してみる。
export async function getServerSideProps({ params }) {
  const id = params.list;
  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&id=${id}&format=json`
  );
  const json = await res.json();
  const lists = json.results.shop;
  const list = lists[0];
  return { props: { list } };
}

export default function List(list) {
  const URL = "https://maps.google.co.jp/maps?output=embed&q=";
  const lat = list.list.lat;
  const lng = list.list.lng;

  return (
    <ListLayout>
      <DynamicRouteCmp datasLists={list} url={URL} lat={lat} lng={lng} />
    </ListLayout>
  );
}
