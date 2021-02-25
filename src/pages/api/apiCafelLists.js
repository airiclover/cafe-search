import fetch from "node-fetch";
import { lat, lng } from "../../pages/index";

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
// 👇最終手段👇
// ・JSONPでCORSエラー回避する？
// ・CORS-anywhere使う？

export default (req, res) => {
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
