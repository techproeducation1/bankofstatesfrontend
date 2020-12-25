import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "../StateProvider";
import "./Product.css";

toast.configure();
function Product({ id, benefit, type, price, image }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    const isExists = cart && cart.some((card) => card.type === type);
    if (isExists) {
      toast.error(type + " Already Added !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        item: {
          type: type,
          benefit: benefit,
          price: price,
        },
      });
    }
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
      <ToastContainer />
    </div>
  );
}

export default Product;
