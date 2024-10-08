import React from 'react'
import OrderItem from './OrderItem'
const NewOrder = () => {
  return (
    <div className='h-full'>
    <h2 className='text-xl font-bold text-center'>New Orders</h2>
    <div className='sm:overflow-auto sm:h-[95%]'>
    {Array.from({ length: 8 }).map((_, index) => <OrderItem key={index} />)}
    </div>
    
  </div>
  )
}

export default NewOrder
