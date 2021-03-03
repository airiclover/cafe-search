// ・ブラウザから値を取得し、データを受け取るという流れ(データをプリレンダリングする必要がない)のためクライアントサイドレンダリングにて実装

// ・ホットペッパーAPIは、サーバー側でのみデータフェッチ可
//  （クライアント側（JavaScriptによるブラウザ側）では不可のため、CORSによりブロックされてしまう。）
// 👉JSONPでCORSエラー回避する

// =====❗️やりたいこと❗️=====
// 👉ブラウザで現在地取得
// 👉APIリクエスト
// 👉返り値を受け取る
// 👉ブラウザで表示
// =======================

import Link from "next/link";
import useSWR from "swr";
import axios from "axios";
import axiosJsonpAdapter from "axios-jsonp";
import Head from "next/head";
import { MainLayout } from "../layouts/main/index";
import { Top } from "../components/top/index";
import { Bottom } from "../components/bottom/index";
import { Search } from "../components/search/index";
import { Common } from "../components/common";
// import { CafeLists } from "../components/cafeLists/index";

const fetcher = () => {
  // getCurrentPosition()は返り値なしのためPromiseで実装し、resolveで結果を取得する
  return new Promise((resolve) => {
    const onSuccess = (position) =>
      // jsonpのためaxiosにてデータフェッチ
      axios
        .get(
          `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=35.669220&lng=139.761457&genre=G014&count=20&format=jsonp`,
          // `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${position?.coords?.latitude}&lng=${position?.coords?.longitude}&genre=G014&count=20&format=jsonp`,
          {
            adapter: axiosJsonpAdapter,
          }
        )
        .then((res) => {
          const jsonp = res.data;
          const data = jsonp.results.shop;
          resolve(data);
        });
    const onError = (err) => {
      console.log(err);
    };
    const options = {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 30000,
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  });
};

export default function Home() {
  // 一度取得したデータをクライアント側でキャッシュしてくれるためuseSWRにて実装
  // (ページ遷移後もデータ取得+キャッシュ更新（Focus Revalidation）され、スクロール位置も保存される)
  const { data } = useSWR("default", fetcher);
  // const { data: data } = useSWR("default", fetcher);

  return (
    <MainLayout>
      <Head>
        <title>cafe-search</title>
      </Head>
      <Top />
      {/* {console.log(data)} */}
      <Search />
      <Bottom />
      {/* ============== */}
      <Link href="/cafePage">
        <a>〜〜〜特集 page!〜〜〜</a>
      </Link>
      {/* ============== */}
      {/* dataが取得できていれば、CafeListsコンポーネントを表示、なければ「loading...」 */}
      {data ? <Common datasLists={data} /> : "loading..."}
      {/* {data ? <CafeLists datasLists={data} /> : "loading..."} */}
    </MainLayout>
  );
}
