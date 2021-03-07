import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../layouts/main/index";
import { Top } from "../components/top/index";
import { Search } from "../components/search/index";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>cafe-search</title>
      </Head>
      <Top />
      <Link href="/nearCafe">
        <a>
          <Search />
        </a>
      </Link>
      <br />
      <Link href="/picupCafe">
        <a>猫カフェ特集</a>
      </Link>
    </MainLayout>
  );
}
