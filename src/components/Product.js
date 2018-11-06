import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Thumbnail = styled.div`
  height: 300px;
  width: 200px;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
  }
`;

const Product = ({ price, quantity, title }) => (
  <div class="card border-0 d-flex align-items-center text-center">
    <Thumbnail>
      <img src={require(`../assets/images/product.jpg`)} alt={title} />
    </Thumbnail>

    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">
        &#36;
        {price}
        {quantity ? ` x ${quantity}` : null}
      </p>
    </div>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
};

export default Product;
