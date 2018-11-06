import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

import styled from "styled-components";

const Section = styled.div`
  position: relative;
  padding: 30px 0;
  overflow: hidden;
`;
const Divider = styled.div`
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  font-size: 28px;
  position: relative;
  background-color: #fff;

  &::after {
    content: "";
    width: 100%;
    border-bottom: solid 1px #a5abb7;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
  }

  .section-title {
    background-color: #fff;
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 20px 0 20px;
    color: #232323;
    position: relative;
    margin: 0;
    font-size: 18px;
    font-weight: 900;
  }
`;

const Thumbnail = styled.div`
  height: 160px;
  width: 200px;

  img {
    max-width: 100%;
    max-height: 100%;
    float: left;
    margin-right: 9px;
  }

  &.right-caption > img {
    float: left;
    margin-right: 9px;
  }

  &.right-caption {
    float: left;
  }

  &.right-caption > .caption {
    padding: 4px;
  }
`;

const App = () => (
  <div>
    <Header />
    <Carousel />
    <ProductsContainer />
    <CartContainer />
    {/* <div class="container cart">
      <div class="item">
        <Thumbnail class="image">
          <img
            src={require(`../assets/images/product.jpg`)}
            alt="..."
            class="float-left"
          />
        </Thumbnail>
        <div class="description">
          <span>title </span>
          <span>description </span>
        </div>
        <div class="quantity">
          <button type="button" class="btn btn-primary plus-btn">
            +
          </button>
          <input
            type="text"
            aria-label="quantity"
            aria-describedby="quantity"
            value="2"
          />
          <button type="button" class="btn btn-primary minus-btn">
            -
          </button>
        </div>
        <div class="price">$200</div>
        <div class="total-price">$400</div>
        <div class="actions">
          <button type="button" class="btn btn-primary delete-btn">
            X
          </button>
        </div>
      </div>
    </div> */}
  </div>
);

export default App;
