import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Thumbnail = styled.div`
  height: 120px;
  width: 180px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CartItem = ({ product }) => {
  return (
    <div class="item d-flex mb-4 justify-content-between align-items-center border-bottom pb-4">
      <Thumbnail class="image">
        <img
          src={require(`../assets/images/product.jpg`)}
          alt="..."
          class="float-left"
        />
      </Thumbnail>
      <div class="description">
        <span>{product.title} </span>
        <span>{product.price} </span>
      </div>
      <div class="quantity">
        <button type="button" class="btn btn-light plus-btn">
          +
        </button>
        <input
          class="w-25 text-center border-0"
          type="text"
          aria-label="quantity"
          aria-describedby="quantity"
          value={product.quantity}
        />
        <button type="button" class="btn btn-light minus-btn">
          -
        </button>
      </div>
      <div class="price">
        &#36;
        {product.price}
      </div>
      <div class="actions">
        <button type="button" class="btn btn-link delete-btn">
          X
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CartItem;
