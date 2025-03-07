import React, { useState } from "react";
import pic from "../../Assest/img/loo.png";
import pic1 from "../../Assest/img/lo.png";

const Header = () => {

  const [showlogout, setShowlogout] = useState(false);

  const handlelogout = () =>{
      setShowlogout(!showlogout)
  }
  return (
    <>
      <div>
        <div className="header">
          <div className="logo">
            <img src={pic} alt="" className="icon" />
            <span className="logo-text">Resaclothing</span>
          </div>
          <div className="icons" onClick={handlelogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
          {showlogout && <button className="logout-btn">Logout</button>}
      </div>
    </>
  );
};

export default Header;
