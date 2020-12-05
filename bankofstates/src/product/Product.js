import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, benefit, type, price, image }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        type: type,
        benefit: benefit,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="div product__info">
        <h1>{type}</h1>
        <p>{benefit}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img className="card_img" src={image} alt="" width="25%" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
