import React, { useState } from "react";
import "./CartItem.css";

const CartItem = () => {
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
    <div className="bg-neutral-200 my-2 rounded-md p-2 flex justify-between items-center relative w-full flex-col md:flex-row ">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.aX118E5H8MxKx0iM7fDpEQHaE8&pid=Api&P=0&h=180"
        className=" rounded-md "
      ></img>
     <div className="flex justify-between flex-wrap w-full md:basis-4/6 px-2 ">

   
      <div className="flex flex-col justify-start">
        <h2 className="font-bold">Product name</h2>
        <p>lorem ispum description of product </p>
        <button className="bg-black text-white p-1 mt-2 rounded-md w-1/2 hover:bg-neutral-700 ">
          Remove
        </button>
      </div>

      <div>
        <p>Quantity</p>
        <div className="flex justify-center rounded-sm border-2 border-black">
          <div
            onClick={increase}
            className="h-full w-6 bg-black text-white text-center hover:bg-rose-300"
          >
            +
          </div>
          <input
            type="number"
            min={1}
            max={5}
            value={quantity}
            className="text-center w-8 "
          />
          <div
            onClick={decrease}
            className="h-full w-6 bg-black text-white text-center hover:bg-rose-300 "
          >
            -
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end me-2 ">
        <p className="text-md font-bold ">Total: 2000rs </p>
        <p className="flex font-semibold">
          Price:&nbsp; <p class="line-through text-red-500">2200rs</p>
        </p>
        <p className="text-green-700">saved: 200rs</p>
      </div>
    </div>
    </div>
  );
};

export default CartItem;
