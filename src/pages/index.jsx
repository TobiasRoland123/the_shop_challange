import Head from "next/head";
import Image from "next/image";
import Anchor from "@/components/Anchor";
import Layout from "@/components/Layout";
import ProductList from "@/components/ProductList";

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

// function ProductList(props) {
//   // console.log(props.products);
//   return (
//     <>
//       <article>
//         <h2>product List</h2>
//         <ul>
//           {props.products.map((product) => (
//             <ListItem product={product} />
//           ))}
//         </ul>
//       </article>
//     </>
//   );
// }

// function ListItem(props) {
//   // console.log(props.product);
//   return (
//     <>
//       <li key={props.product.id}>
//         <h3>{props.product.productdisplayname}</h3>

//         <p>{props.product.price}</p>

//         <Anchor href={`/products/${props.product.id}`}> Read more</Anchor>
//       </li>
//     </>
//   );
// }
