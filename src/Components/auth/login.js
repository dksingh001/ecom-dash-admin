import React, { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AdminLogin } from "../../Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [from, SetFrom] = useState({
    email: "",
    password: "",
  });

  // console.log(Form);

  // Accessing loading and error state from Redux, if needed

  const { data, loading, error } = useSelector((state) => state.dataState);
  // console.log(data)
  
  const handlechange = (e) => {
    const { name, value } = e.target;
    SetFrom((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handledata = async (e) => {
    e.preventDefault(); // Prevents the form from submitting in the traditional way
   
    const { email, password } = from;
       // Dispatching the login action
    dispatch(AdminLogin({ email, password }));  
    navigate("/addproduct");
  };

  // if (data) {
  //   navigate("/addproduct")
  // }

  // Redirect after successful login
  // useEffect(() => {
  //   console.log(data)
  //   if ( data && data?.token) {
  //     console.log("Token found:", data);
  //     localStorage.setItem("authtoken", JSON.stringify({ token: data.token }));
  //     navigate("/Addproduct");
  //   }else{
  //     console.log("No data recived" , data);
  //   }
  // }, [data, navigate]);
  

  return (
    <>
      <form className="max-w-md mx-auto" id="lgf" onSubmit={handledata}>
        <div className="relative z-0 w-full mb-5 group">
          {/* <input
            type="email"
            name="email"
            id="floating_email"
            onChange={handlechange}
            value={from.email}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="email"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Admin ID
          </label> */}
          <input
            type="email"
            name="email"
            // id="email"
            onChange={handlechange}
            value={from.email}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            // id="password"
            onChange={handlechange}
            value={from.password}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="password"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        {/* <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button> */}
         <button type="submit"
         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
};

export default Login;
