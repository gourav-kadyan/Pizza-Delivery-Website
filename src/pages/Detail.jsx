import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom' 
//useParam -- use to get the key and then request to api
//useNavigate -- redirect or go back to previous state or go forward- uses -1 1 2 -2 val to go

const Detail = () => {
  const [product, setProduct] = useState({})
  const params = useParams();
  console.log(params)

  const Navigate = useNavigate()

  useEffect( () => {
    fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
    .then(res => res.json())
    .then(product => {
        setProduct(product)
        //console.log(product)
    })
  }, [params._id])
  return (
    <div className='container mx-auto mt-12'>
      <button className='font-bold mb-12 text-lg' onClick={() => {Navigate(-1)}} >Back</button>
      <div className='flex'>
        <img src={product.image} alt="pizza_image" />
        <div className='ml-14'>
          <h1 className='text-xl font-bold'>{product.name}</h1>
          <div className='text-md'>{ product.size }</div>
          <div className='font-bold mt-2'>₹ {product.price} </div>
          <button className='bg-yellow-500 py-1 px-8 font-bold rounded-full mt-4'>Add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default Detail