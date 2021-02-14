import Head from "next/head";
import { Layout } from "../layouts/index";
import { Top } from "../components/top/index";
import { Bottom } from "../components/bottom/index";
import { Search } from "../components/search/index";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Search />
      <Bottom />
    </Layout>
  );
}
