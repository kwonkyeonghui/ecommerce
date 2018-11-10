import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const App = () => (
  <div>
    <Header />
    <Carousel />
    <ProductsContainer />
    <CartContainer />
  </div>
);

export default App;
