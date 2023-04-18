import { ListItem } from "./ListItem";

export function ProductList(props) {
  // console.log(props.products);
  return (
    <>
      <article>
        <h2>product List</h2>
        <ul>
          {props.products.map((product) => (
            <ListItem product={product} />
          ))}
        </ul>
      </article>
    </>
  );
}
