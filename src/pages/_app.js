import React, { useEffect } from "react";
import "../styles/global.css";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

export default function App({ Component, pageProps }) {
  if (process.browser) {
    // バーの表示開始
    nprogress.start();
  }

  useEffect(() => {
    // バーの表示終了
    nprogress.done();
  });

  return <Component {...pageProps} />;
}
