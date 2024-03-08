import React from "react";
import { useState } from "react";
import img from "../img/thingslinker_logo.svg";

const TwoStepVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input field if value is entered
    if (value !== "" && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  //

  const [email, setEmail] = useState("");

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

  return (
    <div className="h-screen">
      <div className="sm:shadow-md sm:bg-gray-50 text-gray-600 rounded-lg px-10 py-10 mx-auto my-16 w-[460px]">
        <img src={img} alt="logo" width={120} className="mx-auto mb-5" />
        <h1 className="text-[24px] font-semibold text-center">
          Two-Step Verification🔐
        </h1>
        <p className="text-[14px] text-center">
          We sent a verification code to your mobile. Enter the code from the
          mobile in the field below.
        </p>
        <p className="text-[16px] text-black text-center p-2">******1234</p>
        <p className="text-[16px] text-center p-2">
          Type your 6 digit security code
        </p>

        <div className="flex justify-center">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              id={`otp-input-${index}`}
              maxLength="1"
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-12 border border-gray-300 rounded-md text-2xl mx-1 text-center"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-8 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Verify My Account
        </button>
        <div className="flex items-center justify-center">
          <p>Didn't get the mail? </p>
          <a href="/login" className="text-blue-500 flex justify-center p-2">
            Resend
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwoStepVerification;
