import React from "react";
import logo from "../img/thingslinker_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 bg-gray-50 shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="thingslinkerLOGO" width={150} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-semibold">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About us</a>
        </div>
        <div className="flex items-center gap-4 font-semibold text-lg">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} /> <p>+91-12345-67890</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
