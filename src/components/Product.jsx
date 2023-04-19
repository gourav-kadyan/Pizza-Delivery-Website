import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../CartContext";
const Product = (props) => {

  const [ isAdding, setIsAdding] = useState(false)

  const { cart, setCart } = useContext(CartContext);
  // const [data, setData] = useState([])

  const addtocart = (event, product) => {


    event.preventDefault();
    product.val = 1;
    let arr=[...cart,product]
    setCart(arr);
    //console.log(cart);
    setIsAdding(true)

    // setTimeout(() => {
    //   setIsAdding(false)
    // }, 1000);

    //console.log(product);
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
            disabled = {isAdding}
            onClick={(e) => {
              addtocart(e, props.product);
            }}
            className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} py-1 px-4 font-bold rounded-full`}
          >
            ADD{isAdding ? 'ED' : ''}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
