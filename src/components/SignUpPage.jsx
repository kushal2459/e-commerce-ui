import React from "react";
import img from "../img/thingslinker_logo.svg";
import { useState } from "react";
import facebook from "../img/icons8-facebook.svg";
import github from "../img/icons8-github.svg";
import google from "../img/icons8-google.svg";
import twitter from "../img/icons8-twitter.svg";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username || !email || !password){
      alert("Please enter required details!");
      setEmail('');
      setPassword('');
      setUsername('');
    }else{
      setEmail('');
      setPassword('');
      setUsername('');
      console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("success!");
    }
    
  };

  return (
    <>
      <div className="sm:shadow-md sm:bg-gray-50 text-gray-600 rounded-lg px-10 py-10 my-16 mx-auto w-[460px] min-h-[500px]">
        <img src={img} alt="logo" width={120} className="mx-auto mb-5" />
        <h1 className="text-[24px] font-semibold text-center">
          Adventure starts here🚀
        </h1>
        <p className="text-[14px] text-center">
          Make your app management easy and fun!
        </p>
        <input
          type="username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="mt-5 px-4 py-3  border border-gray-300 rounded-md w-full"
          placeholder="Username"
          required
        />
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
        <div className="flex items-center px-2 py-5">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="" />{" "}
            <span>
              I agree to{" "}
              <a href="/" className="text-blue-500">
                privacy policy & terms
              </a>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <div className="flex justify-center gap-2 items-center pt-2 mt-5">
          <p>Already have an account?</p>
          <a href="/" className="text-blue-500">
            Sign in instead
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

export default SignUpPage;
