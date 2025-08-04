import { useState } from "react";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(true);
  const pageContent = viewCart ? <Cart /> : <Product />;
  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );
}

export default App;
