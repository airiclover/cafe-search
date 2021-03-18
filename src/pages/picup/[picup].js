import { ListLayout } from "../../layouts/list/index";
import { DynamicRouteCmp } from "../../components/dynamicRouteCmp";

export async function getStaticPaths() {
  const keywords = "猫";
  const utf8Key = encodeURIComponent(keywords);

  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&genre=G014&keyword=${utf8Key}&count=20&format=json`
  );
  const datasLists = await res.json();
  const datas = datasLists.results.shop;

  const paths = datas.map((data) => {
    return {
      params: {
        picup: `${data.id}`,
      },
    };
  });
  console.log(paths);

  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const id = params.picup;

  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&id=${id}&format=json`
  );
  const dataListsJson = await res.json();
  const lists = dataListsJson.results.shop;
  const list = lists[0];
  return { props: { list }, revalidate: 60 * 60 };
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
