import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"

const Cart = () => {

  const { cart, setCart } = useContext(CartContext)


  // useEffect(() => {

  console.log(cart);

  //},[]);

  const updatecart = (e,item) => {
    const updatedCart = cart.filter(product => product._id !== item._id);
    console.log(updatedCart);
    setCart(updatedCart);
  }

  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="font-bold my-12">Cart Items</h1>
      <ul>
        {cart.map((item)=>(
          <li className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src={item.image} alt="" />
              <span className="font-bold ml-4 w-48">{item.name}</span>
            </div>
            <div>
              <button className="bg-yellow-500 px-4 py-2 leading-none rounded-full">-</button>
              <b className="px-4">2</b>
              <button className="bg-yellow-500 px-4 py-2 leading-none rounded-full">+</button>
            </div>
            <span>₹ {item.price}</span>
            <button onClick={(e) => {updatecart(e,item)}} className="text-white bg-red-500 px-4 py-2 leading-none rounded-full">Delete</button>
          </div>
        </li>
        ))}
        
      </ul>
      <hr className="my-6"/>
      <div className="text-right mb-6">
        Grand Total : ₹ 1500
      </div>
      <div className="text-right">
        <button className="bg-yellow-500 px-4 py-2 leading-none rounded-full">Order Now</button>
      </div>
    </div>
  )
}

export default Cart