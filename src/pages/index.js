import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../layouts/main/index";
import { Top } from "../components/top/index";
import { Search } from "../components/search/index";
import { Picup } from "../components/picup/index";

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
        <a>
          <Picup />
        </a>
      </Link>
    </MainLayout>
  );
}
