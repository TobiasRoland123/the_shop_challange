import { Children } from "react";
import Anchor from "./Anchor";

export default function Layout({ children }) {
  return (
    <>
      <nav>Navigation</nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
