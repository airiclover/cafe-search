import { ListLayout } from "../../layouts/list/index";
import { CommonLists } from "../../components/common";

export async function getStaticProps() {
  // export const getStaticProps = async () => {
  const keywords = "猫";
  const utf8Key = encodeURIComponent(keywords);

  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&genre=G014&keyword=${utf8Key}&count=20&format=json`
  );
  const datasLists = await res.json();
  const data = datasLists.results.shop;

  return {
    props: {
      data,
    },
  };
}

export default function PicupCafe(props) {
  const { data } = props;

  return (
    <ListLayout>
      <CommonLists datasLists={data} page={"picup"} title={"Pickup CatCafes"} />
    </ListLayout>
  );
}
