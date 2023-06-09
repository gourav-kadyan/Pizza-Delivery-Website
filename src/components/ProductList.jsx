import React, { useContext } from 'react'
import Product from './Product'
import { useState, useEffect, createContext } from 'react'

//import { CartContext } from '../CartContext'

const ProductList = () => {
  // const {name} =useContext(CartContext);


const [products, setProducts] = useState([]);
useEffect(() => {
    fetch('https://star-spark-pasta.glitch.me/api/products')
    .then(response => response.json())
    .then(products => {
        setProducts(products);
    });
},[]);


  return (
      <div className="container pb-24 mx-auto">
        <h1 className="my-8 font-bold text-3xl">Products</h1>
          <div className='grid grid-cols-5 my-8 gap-24 '>
            {
                  products.map(product => <Product key={product._id} product={product} />)
            }
          </div>
      </div>
  )
}

export default ProductList