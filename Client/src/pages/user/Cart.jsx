import React from 'react'
import CartItem from '../../components/user/CartItem/CartItem'

const Cart = () => {
  return (
    <div className='mt-20 p-4 flex justify-between xl:justify-around flex-wrap'>
      <div className='w-full lg:w-4/6 '>
      <div className='flex justify-between'>
        <h1 className='font-bold text-2xl'>My Cart</h1>
        <b>total amount :3000rs</b>
      </div>
      <div>
      {Array.from({ length: 8 }).map((_, index) => <CartItem key={index} />)}
      </div>
      </div>
      


      <div className='w-full lg:w-1/4 '>
       <div className='w-full bg-neutral-200 p-4 rounded-md mb-4'>
       <h1 className='text-lg font-bold'>Delivery Address</h1> 
       <div className='bg-neutral-100 p-4 rounded-md'>
        <p>lorem ispum regnf cfjkj dfjnjnf</p>
       </div>
        </div>
       <div className='w-full bg-neutral-200 p-4 rounded-md'>
        <h1 className='text-lg font-bold'>Payment Summary</h1>
        <ul className='my-4'>
          <li className='flex justify-between my-2'>
            <p>Total</p>
            <p>2000rs</p>
          </li>
          <hr></hr>
          <li className='flex justify-between my-2'>
            <p>Discount</p>
            <p>10%</p>
          </li>
          <hr></hr>
          <li className='flex justify-between my-2'>
            <p>Delivery Charge</p>
            <p>free</p>
          </li>
          <hr></hr>
          <li className='flex justify-between my-2'>
            <p className='font bold'>Total</p>
            <p>1000rs</p>
          </li>
        </ul>
        
        <button className='w-full bg-black text-white py-2 rounded-md'>Proceed to pay</button>
       </div>
      </div>
    </div>
  )
}

export default Cart
