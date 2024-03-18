import React from "react";
import { useNavigate } from 'react-router-dom'
import img from "../img/thingslinker_logo.svg";
import { useState } from "react";
import facebook from "../img/icons8-facebook.svg";
import github from "../img/icons8-github.svg";
import google from "../img/icons8-google.svg";
import twitter from "../img/icons8-twitter.svg";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("please enter a valid email or passsword");
      setPassword("");
      setEmail("");
    } else {
      try{
        const response = await fetch('http://192.168.1.26:3100/Auth/Login', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (response.ok){
          const data = await response.json();
          //store user token
          alert("Login successfull");
          navigate('/');
        }else{
          const errorData = await response.json();
          alert("Login failed: "+ errorData.message);
          setPassword("");
          setEmail("");
        }
      } catch(error){
        console.error("Login failed:", error);
        alert("An error occured while logging in");
      }
    }
  };

  const redirectToHomePage = () => {
    navigate('/');
  }

  return (
    <>
      <div className="sm:shadow-md sm:bg-gray-50 text-gray-600 rounded-lg px-10 py-10 my-16 mx-auto w-[460px] min-h-[500px]">
        <img src={img} alt="logo" width={120} className="mx-auto mb-5 cursor-pointer" onClick={redirectToHomePage}/>
        <h1 className="text-[24px] font-semibold text-center">
          Welcome to Thingslinker!🙋‍♂️
        </h1>
        <p className="text-[14px] text-center">
          Please sign-in to your account and start the adventure
        </p>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-5 px-4 py-3  border border-gray-300 rounded-md w-full"
          placeholder="Email"
          required
        />
        <div className="flex">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="my-5 px-4 py-3 border border-gray-300 rounded-md w-full"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-between items-center px-2 py-5">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="" /> <span>Remember Me</span>
          </div>
          <a href="/forgot-password" className="text-blue-500">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="flex justify-center gap-2 items-center pt-2 mt-5">
          <p>New to our platform?</p>
          <a href="/sign-up" className="text-blue-500">
            Create an account
          </a>
        </div>
        <div className="flex gap-2 items-center justify-center p-2">
          <hr width={200} />
          <p>or</p>
          <hr width={200} />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <img src={facebook} alt="facebook" width={25} />
          <img src={twitter} alt="facebook" width={25} />
          <img src={github} alt="facebook" width={25} />
          <img src={google} alt="facebook" width={25} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
