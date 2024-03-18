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
      <nav className="flex items-center justify-between px-10 py-4 bg-gray-100">
        <div>
          <img src={logo} alt="thingslinkerLOGO" width={150} />
        </div>
        <div className="flex gap-8 text-lg font-semibold">
          <a href="/">Home</a>
          <a href="/">Product</a>
          <a href="/">About us</a>
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
