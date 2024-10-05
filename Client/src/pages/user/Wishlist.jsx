import React from 'react'
import ProductCard from '../../components/user/ProductCard/ProductCard'
import LoadingCard from '../../components/user/LoadingCard/LoadingCard'
const Wishlist = () => {
  return (
    <div className='mt-20 p-4'>
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-autoClass justify-items-center ">
     {Array.from({ length: 8 }).map((_, index) => <ProductCard key={index} />)}
     {Array.from({ length: 8 }).map((_, index) => <LoadingCard key={index} />)}
      </div>
    </div>
  )
}

export default Wishlist
