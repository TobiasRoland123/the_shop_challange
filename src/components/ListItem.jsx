import Anchor from "./Anchor";

export default function ListItem(props) {
  // console.log(props.product);
  return (
    <>
      <li key={props.product.id}>
        <h3>{props.product.productdisplayname}</h3>

        <p>{props.product.price}</p>

        <Anchor href={`/products/${props.product.id}`}> Read more</Anchor>
      </li>
    </>
  );
}
