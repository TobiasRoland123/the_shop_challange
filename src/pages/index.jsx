import Head from "next/head";
import Image from "next/image";
import Anchor from "@/components/Anchor";
import Layout from "@/components/Layout";
import { ProductList } from "./ProductList";

export default function App({ products }) {
  // console.log(products);
  return (
    <>
      <Head>
        <title>The Shop Challange</title>
      </Head>
      <h1>The Shop challenge</h1>

      <ProductList products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const api = "https://kea-alt-del.dk/t7/api/products";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
