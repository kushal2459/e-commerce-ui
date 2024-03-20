import React from "react";
import logo from "../img/thingslinker_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="md:sticky md:top-0 bg-gray-100 shadow-md z-10">
        <div className="main flex flex-row items-center justify-between px-8 md:px-10 py-4 ">
          <div className="left flex items-center">
            <img src={logo} alt="thingslinkerLOGO" width={150} />
          </div>
          <div className="links md:flex hidden flex-col md:flex-row gap-4 md:gap-8 text-lg font-semibold">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Products
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              About Us
            </Link>
          </div>
          <div className="right md:flex hidden items-center gap-4 font-semibold text-lg">
            <FontAwesomeIcon icon={faUser} className="text-blue-600" />
            <FontAwesomeIcon icon={faCartShopping} className="text-blue-600" />
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
              <p className="text-blue-600">+91-12345-67890</p>
            </div>
          </div>
          {/* mobile screen  */}
          <div className="md:hidden flex items-center justify-center gap-5">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              className="text-blue-600"
            />
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className="text-blue-600"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
