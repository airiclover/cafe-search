import fetch from "node-fetch";

// export default (req, res) => {
//   res.statusCode = 200;
//   fetch(
//     "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=35.66922&lng=139.761457&genre=G014&format=json"
//   )
//     .then((r) => r.json())
//     .then((data) => res.json(data.results.shop));
// };

export default (req, res) => {
  const LAT = 35.66922;
  const LNG = 139.761457;

  res.statusCode = 200;
  fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${LAT}&lng=${LNG}&genre=G014&format=json`
    // `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed1b3ecc1ac15f32&lat=${position?.coords?.latitude}&lng=${position?.coords?.longitude}&genre=G014&format=json`
  )
    .then((r) => r.json())
    .then((data) => res.json(data.results.shop));

  // navigator.geolocation.getCurrentPosition((position) => {
  //   console.log(position.coords.latitude);
  // });
};
