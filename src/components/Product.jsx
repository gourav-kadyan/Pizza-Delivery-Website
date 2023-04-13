import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../CartContext";
const Product = (props) => {

  const { cart, setCart } = useContext(CartContext);

  const addtocart = (event, product) => {
    event.preventDefault();
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;//if already present so increment items to add 
    } else {
      _cart.items[product._id] = 1;//if this is the first time the id clicked 
    }

    if(!_cart.totalItems){
        _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);

    console.log(product);
  };


  return (
    <Link to={`/product/${props.product._id}`}>
      <div>
        <img src={props.product.image} alt="" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{props.product.name}</h2>
          <span className="bg-gray-200 rounded-full py-1 px-4 text-sm">
            {props.product.size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>₹ {props.product.price}</span>
          <button
            onClick={(e) => {
              addtocart(e, props.product);
            }}
            className="bg-yellow-500 py-1 px-4 font-bold rounded-full"
          >
            ADD
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
