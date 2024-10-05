import React from 'react'
import OrderItem from '../../components/user/OrderItem/OrderItem'
const Order = () => {
  return (
    <div className='p-4 mt-16'>
      <h2 className='text-xl font-bold text-center'>My Orders</h2>
      {Array.from({ length: 8 }).map((_, index) => <OrderItem key={index} />)}
    </div>
  )
}

export default Order
