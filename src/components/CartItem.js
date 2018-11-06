import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Thumbnail = styled.div`
  height: 160px;
  width: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CartItem = ({ product }) => {
  return (
    <div class="item">
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
        <button type="button" class="btn btn-primary plus-btn">
          +
        </button>
        <input
          type="text"
          aria-label="quantity"
          aria-describedby="quantity"
          value={product.quantity}
        />
        <button type="button" class="btn btn-primary minus-btn">
          -
        </button>
      </div>
      <div class="price">{product.price}</div>
      <div class="total-price">{product.price * product.quantity}</div>
      <div class="actions">
        <button type="button" class="btn btn-primary delete-btn">
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
