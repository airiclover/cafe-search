import { ListLayout } from "../layouts/list/index";
import { Common } from "../components/common";

// export const getStaticProps = async () => {
export const getStaticProps = async function () {
  const keywords = "猫";
  // const keywords = ["ゆっくり", "ゆったり", "おしゃれ", "コーヒー", "猫"];
  // const key = Math.floor(Math.random() * keywords.length);
  // const utf8Key = unescape(encodeURIComponent(keywords[key]));

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

const index = (props) => {
  const { datasLists } = props;

  return (
    <>
      <ListLayout>
        <h1>全国カフェピックアップ</h1>
        <Common datasLists={datasLists} />
      </ListLayout>
    </>
  );
};

export default index;
