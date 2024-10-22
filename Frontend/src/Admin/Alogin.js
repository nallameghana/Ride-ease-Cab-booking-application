import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../Components/NavBar';



const Alogin =()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    axios.post("http://localhost:8000/alogin", payload)
      .then(result => {
        console.log(result);
        if (result.data.Status === "Success") {
          navigate("/ahome");
          alert('Login Successfull')
        } else {
          alert("Login failed");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Login failed");
      });
  };



  let formHandle1 = (e) => {
    e.preventDefault()
    navigate("/asignup")
  }
  return (
    <div >
      <NavBar/>
    <div className="flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8" >
      <div className="max-w-md w-full space-y-8" style={{padding:"30px", backgroundColor:"lightgreen",borderRadius:"25px",marginTop:"50px" }}>
        <div >
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
           Admin Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" >
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              // type="submit"
              onClick={handleSubmit}
              className="bg-dark group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white "
              >
              Log in
            </button>
            <br/>
          <p >Don't have account create
          <button
             onClick={formHandle1}
              className="bg-dark group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white "
            >
                Signup
             {/* <Link to='/signup' style={{textDecoration:"none", color:"white"}}>Signup</Link> */}
            </button>
          </p>
           
          </div>
        </form>
      </div>
    </div>
    
    </div>
  );
}

export default Alogin;
