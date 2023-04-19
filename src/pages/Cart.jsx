import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"

const Cart = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  const { cart, setCart } = useContext(CartContext)



  // console.log(cart);

  // let Price = cart.reduce((total, item) => total + item.price, 0);
  // setTotalPrice(Price)

  // const deleteItem = (e,item) => {
  //   const price = item.val * item.price;
  //   setTotalPrice(totalPrice - price);
  //   const updatedCart = cart.filter(product => product._id !== item._id);
  //   console.log(updatedCart);
  //   setCart(updatedCart);
  // }

  // const increment = (e,item) =>{
  //   item.val += 1;
  //   const val = item;
  //   const up = cart.filter(product => product._id !== item._id);
  //   const adder = [...up,val];
  //   setCart(adder)
  //   setTotalPrice(totalPrice + item.price)
  // }

  // const decrement = (e,item) => {
  //     item.val -= 1;
  //     const val = item;
  //     const up = cart.filter(product => product._id !== item._id);
  //     const adder = [...up,val];
  //     setCart(adder) 
  //     setTotalPrice(totalPrice - item.price);
  // }

  useEffect(() => {
    const newPrice = cart.reduce((total, item) => total + item.val*item.price, 0);
    setTotalPrice(newPrice);
  }, [cart]);

  const deleteItem = (e, item) => {
    // const price = item.val * item.price;
    // setTotalPrice(totalPrice - price);
    const updatedCart = cart.filter((product) => product._id !== item._id);
    console.log(updatedCart);
    setCart(updatedCart);
  };

  const increment = (e, item) => {
    item.val += 1;
    const val = item;
    const up = cart.filter((product) => product._id !== item._id);
    const adder = [...up, val];
    setCart(adder);
    // setTotalPrice(totalPrice + item.price);
  };

  const decrement = (e, item) => {
    item.val -= 1;
    const val = item;
    const up = cart.filter((product) => product._id !== item._id);
    const adder = [...up, val];
    setCart(adder);
    // setTotalPrice(totalPrice - item.price);
  };

  const OrderNow = () => {
      if(totalPrice > 0) {
        setCart([]);
        alert("Thank you for placing your pizza order. Your delivery will arrive at your doorstep within 1-2 hours.")
      }
      else{
        alert("Kindly add some pizzas to your shopping cart.")
      }
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
              <button disabled={item.val <= 1} onClick={(e) => {decrement(e,item)}} className="bg-yellow-500 px-4 py-2 leading-none rounded-full">-</button>
              <b className="px-4">{item.val}</b>
              <button onClick={(e) => {increment(e,item)}} className="bg-yellow-500 px-4 py-2 leading-none rounded-full">+</button>
            </div>
            <span>₹ {item.val * item.price}</span>
            <button onClick={(e) => {deleteItem(e,item)}} className="text-white bg-red-500 px-4 py-2 leading-none rounded-full">Delete</button>
          </div>
        </li>
        ))}
        
      </ul>
      <hr className="my-6"/>
      <div className="text-right mb-6">
        Grand Total : ₹ {totalPrice}
      </div>
      <div className="text-right">
        <button onClick={OrderNow} className="bg-yellow-500 px-4 py-2 leading-none rounded-full">Order Now</button>
      </div>
    </div>
  )
}

export default Cart