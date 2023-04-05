import React from 'react'

const Product = (props) => {

  return (
    <div>
        <img src={props.product.image} alt="" />
        <div className='text-center'>
            <h2 className='text-lg font-bold py-2'>{props.product.name}</h2>
            <span className='bg-gray-200 rounded-full py-1 px-4 text-sm'>{props.product.size}</span>
        </div>
        <div className='flex justify-between items-center mt-4'>
            <span>₹ {props.product.price}</span>
                <button className='bg-yellow-500 py-1 px-4 font-bold rounded-full'>ADD
                </button>
        </div>
    </div>
  )
}

export default Product