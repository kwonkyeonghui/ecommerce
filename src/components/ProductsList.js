import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  padding: 30px 0;
  overflow: hidden;
`;

const Divider = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
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

const ProductsList = ({ title, children }) => (
  <div>
    <Section className="divider">
      <div class="container">
        <Divider>
          <h4 class="section-title">
            <span>{title}</span>
          </h4>
        </Divider>
      </div>
    </Section>
    <div class="row">
      {children.map(productItem => (
        <div class="col text-center">{productItem}</div>
      ))}
    </div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
