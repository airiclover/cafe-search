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

export const lat = 35.66922;
export const lng = 139.761457;

const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    // const { latitude, longitude } = position.coords;
    const getLat = position.coords.latitude;
    const getLng = position.coords.longitude;
    console.log(getLat, getLng);
  }, console.log("error"));
};

export default function Home() {
  const [datas, setDatas] = useState([]);

  // ====================================================
  // useEffect(() => {
  //   fetch("/api/apiCafelLists") // ここをProxyしたAPIにする
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setLoc(data);
  //     });
  // }, []);

  const getApi = () => {
    fetch("/api/apiCafelLists")
      .then((r) => r.json())
      .then((data) => {
        setDatas(data);
      });
  };

  // ====================================================

  return (
    <MainLayout>
      <Head>
        <title>cafe-search</title>
      </Head>
      <Top />
      <button onClick={getLocation}>試しgetLocation試し</button>
      <Search getLocationBtn={getApi} />
      <Bottom />
      {/* <CafeLists datasLists={props.dates} /> */}
      <CafeLists datasLists={datas} />
    </MainLayout>
  );
}
