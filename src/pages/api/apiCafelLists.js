import fetch from "node-fetch";
import { lat, lng } from "../../pages/index";

// ホットペッパーAPIは、サーバー側でのみデータフェッチ可。
// 現在地取得後データフェッチしたいが、クライアント側（JavaScriptによってブラウザ側）では不可のため、CORSによりブロックされてしまう。
// =====❓どうするか❓=====
// 👉CSRでブラウザでページをレンダリング後、getCurrentPosition関数にて「緯度・軽度」を取得

// 👉取得した「緯度・軽度」をこのファイルに渡したい
// 　👆これ無理じゃね？？？
//    ボタン押される度に、新たな緯度・軽度を渡す必要ある。クライアント側でデータフェッチ可能ならuseStateとuseEffectかuseSWRを用いて実装できる（したい）が、サーバー側にデータ渡してフェッチしてとなるとスコープ問題や新たな緯度軽度をexportできなくないか、、、？分からんけど、、、

// 👉受け取った「緯度・軽度」から"node-fetch"を用いてサーバーサイドにてデータフェッチ
// 　（ボタンを押したタイミングでgetApi関数にてデータフェッチしたいため）

// 👉現在地で取得したデータを「useState」などを用いてコンポーネントに渡し、表示させたい

export default (req, res) => {
  console.log("aaaaaaa");

  const LAT = lat;
  const LNG = lng;

  res.statusCode = 200;
  fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${LAT}&lng=${LNG}&genre=G014&format=json`
  )
    .then((r) => r.json())
    .then((data) => res.json(data.results.shop));
};

// export default (req, res) => {
//   res.statusCode = 200;
//   fetch(
//     "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=35.66922&lng=139.761457&genre=G014&format=json"
//   )
//     .then((r) => r.json())
//     .then((data) => res.json(data.results.shop));
// };
