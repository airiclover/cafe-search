import Image from "next/image";
import { ListLayout } from "../layouts/list/index";
import { CommonLists } from "../components/common";

export const getStaticProps = async () => {
  const keywords = "猫";
  const key = Math.floor(Math.random() * keywords.length);
  const utf8Key = unescape(encodeURIComponent(keywords[key]));

  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&genre=G014&keyword=${utf8Key}&count=20&format=json`
  );
  const dataListsJson = await res.json();
  const datasLists = dataListsJson.results.shop;

  return {
    props: {
      datasLists,
    },
  };
};

export default function PicupCafe(props) {
  const { datasLists } = props;

  return (
    <ListLayout>
      <CommonLists
        datasLists={datasLists}
        page={"picup"}
        title={"Pickup CatCafes"}
      />
    </ListLayout>
  );
}
