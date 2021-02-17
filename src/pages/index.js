import Head from "next/head";
import { MainLayout } from "../layouts/main/index";
import { Top } from "../components/top/index";
import { Bottom } from "../components/bottom/index";
import { Search } from "../components/search/index";

const getLocation = () => {
  // 現在位置を取得する
  navigator.geolocation.getCurrentPosition(
    // 成功時の関数
    function (position) {
      // 緯度
      const lat = position.coords.latitude;
      // 経度
      const lng = position.coords.longitude;

      // alert("あなたの現在位置は、\n[" + lat + "," + lng + "]\nです。");
    },

    // エラー時の関数
    function (error) {
      const errorMessage =  "位置情報の取得が許可されませんでした。"
      alert(errorMessage)
    }
  );
};


export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>cafe-search</title>
      </Head>
      <Top />
      <Search getLocationBtn={getLocation} />
      <Bottom />
    </MainLayout>
  );
}
