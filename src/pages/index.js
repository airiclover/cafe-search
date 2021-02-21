import Head from "next/head";
import { MainLayout } from "../layouts/main/index";
import { Top } from "../components/top/index";
import { Bottom } from "../components/bottom/index";
import { Search } from "../components/search/index";
import { CafeLists } from "../components/cafeLists/index";

const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
  }, console.log("error"));
};

export const getStaticProps = async () => {
  const LAT = 35.66922; // 緯度
  const LNG = 139.761457; // 経度

  const res = await fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${LAT}&lng=${LNG}&genre=G014&format=json`
  );
  const json = await res.json();
  const dates = json.results.shop;
  return { props: { dates } };
};

export default function Home(props) {
  // console.log(props.dates);

  return (
    <MainLayout>
      <Head>
        <title>cafe-search</title>
      </Head>
      <Top />
      <Search getLocationBtn={getLocation} />
      <Bottom />
      <CafeLists datasLists={props.dates} />
    </MainLayout>
  );
}
