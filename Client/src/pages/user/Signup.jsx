import React, { useRef, useState } from "react";
import {Link} from 'react-router-dom';
const Signup = () => {
    const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {};
  return (
    <div className="mt-20">
      <div  className="flex flex-col items-center" >
      <div className="loader" ></div>
      <p>Please wait..</p>
      </div>
     
      <div
        className="text-center alert bg-rose-300 w-1/2 mx-auto text-white rounded-md"
        role="alert"
      
      >
        <h1 className=" font-bold">Congratulations</h1>
       <p> you are signed up</p>
      </div>

      <div
        className="text-center alert bg-neutral-200 w-1/2 mx-auto text-black rounded-md"
        role="alert"
      
      >
        <h1 className=" font-bold">Oops, Signup failed</h1>
        Please try again.
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-neutral-200 mx-auto w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            type="text"
            required
            value={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            onChange={(e) => setMail(e.target.value)}
            placeholder="Enter your email"
            type="email"
            value={mail}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="email"
            value={password}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
           Confirm Password
          </label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            type="email"
            value={confirmPassword}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
    
        <div className="flex flex-col items-center justify-between">
          <button
            type="submit"
            className="bg-black text-white text-sm hover:bg-neutral-700 font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <p>Already a user ? <Link to={'/login'} className="text-blue-500">Login here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signup
