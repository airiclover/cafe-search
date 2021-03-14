// ・ブラウザから値を取得し、データを受け取るという流れ(データをプリレンダリングする必要がない)のためクライアントサイドレンダリングにて実装

// ・ホットペッパーAPIは、サーバー側でのみデータフェッチ可
//  （クライアント側（JavaScriptによるブラウザ側）では不可のため、CORSによりブロックされてしまう。）
// そのためJSONPでCORSエラー回避する

import useSWR from "swr";
import axios from "axios";
import axiosJsonpAdapter from "axios-jsonp";
import { ListLayout } from "../layouts/list/index";
import { CommonLists } from "../components/common";
import { Loading } from "../components/loading";

const fetcher = () => {
  // getCurrentPosition()は返り値なしのためPromiseで実装し、resolveで結果を取得する
  return new Promise((resolve) => {
    const onSuccess = (position) =>
      // jsonpのためaxiosにてデータフェッチ
      axios
        .get(
          `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&lat=${position?.coords?.latitude}&lng=${position?.coords?.longitude}&genre=G014&count=20&format=jsonp`,
          {
            adapter: axiosJsonpAdapter,
          }
        )
        .then((res) => {
          const jsonp = res.data;
          const data = jsonp.results.shop;
          data.length === 0
            ? (alert("近くのカフェは見つかりませんでした。"), resolve(data))
            : resolve(data);
        });
    const onError = () => {
      alert("エラーのため情報が取得できませんでした。");
    };
    const options = {
      enableHighAccuracy: true,
      // timeout: 60000,
      // maximumAge: 30000,
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  });
};

export default function NearCafe() {
  // 一度取得したデータをクライアント側でキャッシュしてくれるためuseSWRにて実装
  // (ページ遷移後もデータ取得+キャッシュ更新（Focus Revalidation）され、スクロール位置も保存される)
  const { data } = useSWR("default", fetcher);

  return (
    <ListLayout>
      {/* dataが取得できていれば、CommonListsコンポーネントを表示、なければ「loading...」 */}
      {data ? (
        <CommonLists datasLists={data} page={"lists"} title={"Good Cafes"} />
      ) : (
        <Loading />
      )}
    </ListLayout>
  );
}
