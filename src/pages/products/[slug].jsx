import Head from "next/head";
import Image from "next/image";

export default function Product({ data }) {
  return (
    <>
      <Head>
        <title>{data.productdisplayname}</title>
      </Head>

      <Image
        src={`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`}
        alt={data.productdisplayname}
        width={100}
        height={100}
        sizes=" (max-width: 750px) 100vw, 750px"
      ></Image>
      <h1>{data.productdisplayname}</h1>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const api = "https://kea-alt-del.dk/t7/api/products/" + slug;
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
}

export async function getStaticPaths() {
  const api = "https://kea-alt-del.dk/t7/api/products/";
  const res = await fetch(api);
  const data = await res.json();
  const paths = data.map((object) => {
    console.log(object.slug);
    return { params: { slug: String(object.id) } };
  });

  console.log(data);
  return {
    paths,
    fallback: false,
  };
}
