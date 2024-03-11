import React from "react";
import { useNavigate } from  'react-router-dom'
import { useState } from "react";
import img from "../img/thingslinker_logo.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      alert("Please enter a valid email!");
    } else {
      console.log("Email:", email);
      setEmail("");
      alert("Success!");
    }
  };
  const redirectToHomePage = () => {
    navigate('/');
  }

  return (
    <>
      <div className="sm:shadow-md sm:bg-gray-50 text-gray-600 rounded-lg px-10 py-10 mx-auto my-16 w-[460px]">
      <img src={img} alt="logo" width={120} className="mx-auto mb-5 cursor-pointer" onClick={redirectToHomePage}/>
        <h1 className="text-[24px] font-semibold text-center">
          Forgot Password🔒
        </h1>
        <p className="text-[14px] text-center">
          Enter your email and we'll send you instructions to reset your
          password
        </p>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-5 px-4 py-3  border border-gray-300 rounded-md w-full"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-8 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Send Reset Link
        </button>
        <a href="/login" className="text-blue-500 flex justify-center p-2">
          Back to login
        </a>
      </div>
    </>
  );
};

export default ForgotPassword;
