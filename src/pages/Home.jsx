import React from 'react'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <>
      <div className='hero py-16'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='w-1/2'>
            <h6 className='text-lg '><em>Are You Hungry?</em></h6>
            <h1 className='text-3xl md:text-5xl font-bold'>Don't Wait !</h1>
            <button className='rounded-full bg-yellow-500 hover:bg-yellow-600 text-white mt-4 px-6 py-2 '>Order Now</button>
          </div>
          <div className='w-1/2'>
            <img className='w-4/5' src="/images/pizza.png" alt="pizza" />
          </div>
        </div>
      </div>
      <div>
        <ProductList />
      </div>
    </>
  )
}

export default Home