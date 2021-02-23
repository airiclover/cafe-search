// import Head from "next/head";
// import { MainLayout } from "../layouts/main/index";
// import { Top } from "../components/top/index";
// import { Bottom } from "../components/bottom/index";
// import { Search } from "../components/search/index";
// import { CafeLists } from "../components/cafeLists/index";

// // const getLocation = () => {
// //   navigator.geolocation.getCurrentPosition((position) => {
// //     // const { latitude, longitude } = position.coords;
// //     const lat = position.coords.latitude;
// //     const lng = position.coords.longitude;
// //     console.log(lat, lng);
// //   }, console.log("error"));
// // };

// export const getServerSideProps = async () => {
//   // export const getStaticProps = async () => {
//   // async function getApi() {
//   // const LAT = latitude;
//   // const LNG = longitude;
//   const LAT = 35.66922;
//   const LNG = 139.761457;

//   const res = await fetch(
//     `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${LAT}&lng=${LNG}&genre=G014&format=json`
//   );
//   const json = await res.json();
//   const dates = json.results.shop;
//   return { props: { dates } };
// };

// export default function Home(props) {
//   // console.log(props.dates);

//   return (
//     <MainLayout>
//       <Head>
//         <title>cafe-search</title>
//       </Head>
//       <Top />
//       {/* <Search getLocationBtn={getLocation} /> */}
//       <Search />
//       <Bottom />
//       <CafeLists datasLists={props.dates} />
//     </MainLayout>
//   );
// }

import Head from "next/head";
import { MainLayout } from "../layouts/main/index";
import { Top } from "../components/top/index";
import { Bottom } from "../components/bottom/index";
import { Search } from "../components/search/index";
import { CafeLists } from "../components/cafeLists/index";
import React, { useState, useEffect } from "react";

export default function Home() {
  // 1、useStateで変数を定義
  // 2、useEffectで読み込み時に位置情報取得
  // 3、APIリクエスト
  // const [data, setData] = useState({});
  const [data, setData] = useState([]);
  console.log(data);

  // useEffect(() => {
  //   // export const getServerSideProps = async () => {
  //   const onSuccess = async (position) => {
  //     const res = await fetch(
  //       `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${position?.coords?.latitude}&lng=${position?.coords?.longitude}&genre=G014&format=json`
  //     );
  //     const json = await res.json();
  //     const data = json.results.shop;
  //     setData(data);
  //   };

  //   const onError = (err) => {
  //     console.log(err);
  //   };

  //   const options = {
  //     enableHighAccuracy: true,
  //     timeout: 60000,
  //     maximumAge: 30000,
  //   };

  //   navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  // }, []);

  // ====================================================
  useEffect(() => {
    fetch("/api/apiCafelLists") // ここをProxyしたAPIにする
      .then((r) => r.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  // ====================================================

  return (
    <MainLayout>
      <Head>
        <title>cafe-search</title>
      </Head>
      <Top />
      {/* <Search getLocationBtn={getLocation} /> */}
      {/* <Search getLocationBtn={getApi} /> */}
      <Search />
      <Bottom />
      {/* <CafeLists datasLists={props.dates} /> */}
      {/* <CafeLists datasLists={data} /> */}
      <h1>{data.name}</h1>
      {/* <h1>{data[0].name}</h1> */}
    </MainLayout>
  );
}
