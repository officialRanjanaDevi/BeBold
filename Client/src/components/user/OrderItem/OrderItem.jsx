import React, { useState } from "react";
// import "./OrderItem.css";

const OrderItem = () => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    if (quantity < 5) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="bg-neutral-200 my-2 rounded-md p-2 flex justify-between items-center relative w-full lg:w-5/6 mx-auto flex-col md:flex-row ">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.aX118E5H8MxKx0iM7fDpEQHaE8&pid=Api&P=0&h=180"
        className=" rounded-md "
      ></img>
     <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 w-full md:basis-4/6 px-2 ">

   
      <div className="flex flex-col items-center">
        <h2 className="font-bold">Product name</h2>
        <p>lorem ispum description of product </p>
       
      </div>
      <div className="flex flex-col items-center me-2 ">
        <p className="text-md font-bold ">Total: 2000rs </p>
        <p className="flex font-semibold">
          Price:&nbsp; <p class="line-through text-red-500">2200rs</p>
        </p>
        <p className="text-green-700">saved: 200rs</p>
      </div>
      <div className="text-center">
        <h2 className="font-bold text-md">Expected delivery </h2>
        <p className="p-1 bg-neutral-300 rounded-md text-center mt-1 w-1/2 mx-auto">24 sep </p>
      </div>
      <div className="text-center">
        <h2 className="font-bold text-md">Delivery status</h2>
        <p className="p-1 bg-neutral-300 rounded-md text-center mt-1 w-1/2 mx-auto">Shipping</p>
      </div>
      <button className="bg-black text-white  mt-2 rounded-md max-h-8 hover:bg-neutral-700 ">
          Cancel
        </button>
    </div>
    </div>
  );
};

export default OrderItem;
