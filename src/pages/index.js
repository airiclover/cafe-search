// ホットペッパーAPIは、サーバー側でのみデータフェッチ可。
// （クライアント側（JavaScriptによるブラウザ側）では不可のため、CORSによりブロックされてしまう。）
// =====❗️やりたいこと❗️=====
// ブラウザで現在地取得
// 👉値（緯度・軽度）をサーバーへ送る
// 👉サーバーからAPIへリクエストを送る
// 👉返り値を受け取る
// 👉ブラウザで表示

// =====❓どうするか❓=====
// クライアントとサーバー間でデータ受け渡しをすれば解決できるが、サーバー側（node.js）の知識がまだない...(´；ω；`)
// ブラウザから値取得⏩戻り値を受け取るという流れのため,SSR・SSG・ISR該当せず
// 👇最終手段👇
// ・CORS-anywhere使う？👈Github:issue#301にて、"If possible, try to avoid the need for a proxy at all. "とあるため使わない方向に。
// ・JSONPでCORSエラー回避する？

import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosJsonpAdapter from "axios-jsonp";
import Head from "next/head";
import { MainLayout } from "../layouts/main/index";
import { Top } from "../components/top/index";
import { Bottom } from "../components/bottom/index";
import { Search } from "../components/search/index";
import { CafeLists } from "../components/cafeLists/index";

export default function Home() {
  const [location, setLocation] = useState([]);
  const [datas, setDatas] = useState([]);

  const getLocation = () => {
    const onSuccess = (position) =>
      axios
        .get(
          `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${position?.coords?.latitude}&lng=${position?.coords?.longitude}&genre=G014&format=jsonp`,
          {
            adapter: axiosJsonpAdapter,
          }
        )
        .then((res) => {
          const jsonp = res.data;
          const apiDates = jsonp.results.shop;
          setDatas(apiDates);
          console.log(apiDates);
          // return { props: { dates } };
          setLocation([
            position?.coords?.latitude,
            position?.coords?.longitude,
          ]);
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
  };

  return (
    <MainLayout>
      <Head>
        <title>cafe-search</title>
      </Head>
      <Top />
      <Search getLocationBtn={getLocation} />
      <Bottom />
      <h1>{location[0]}</h1>
      <h1>{location[1]}</h1>
      <CafeLists datasLists={datas} />
    </MainLayout>
  );
}
