import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import CartItem from "./CartItem";
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

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      // <Product
      //   title={product.title}
      //   price={product.price}
      //   quantity={product.quantity}
      //   key={product.id}
      // />
      <CartItem product={product} />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div class="mx-5">
      <Section className="divider">
        <div class="container">
          <Divider class="text-left">
            <h4 class="section-title">
              <span>your cart </span>
            </h4>
          </Divider>
        </div>
      </Section>
      <div>{nodes}</div>
      <p>
        Total: &#36;
        {total}
      </p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
