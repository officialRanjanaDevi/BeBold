import React, { useRef, useState } from "react";
import {Link} from 'react-router-dom';
const Login = () => {
    const form = useRef();
   const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
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
        <h1 className=" font-bold">Login Success</h1>
      
      </div>

      <div
        className="text-center alert bg-neutral-200 w-1/2 mx-auto text-black rounded-md"
        role="alert"
      
      >
        <h1 className=" font-bold">Oops, login failed</h1>
        Please try again.
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-neutral-200 mx-auto w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md"
      >
       
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
    
        <div className="flex flex-col items-center justify-between">
          <button
            type="submit"
            className="bg-black text-white text-sm hover:bg-neutral-700 font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <p>Create a account: <Link to={'/signup'} className="text-blue-500">Signup here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
