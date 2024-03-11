import React from "react";
import { useNavigate } from  'react-router-dom'
import { useState } from "react";
import img from "../img/thingslinker_logo.svg";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
if (newPassword && confirmPassword && newPassword === confirmPassword) {
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    setNewPassword('');
    setConfirmPassword('');
    alert("Success!");
  } else {
    alert("Please confirm your new password again!");
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
          Reset Password🔒
        </h1>
        <p className="text-[14px] text-center">
          Your new password must be different from previously used passwords
        </p>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
          className="mt-5 px-4 py-3  border border-gray-300 rounded-md w-full"
          placeholder="New password"
          required
        />
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="mt-5 px-4 py-3  border border-gray-300 rounded-md w-full"
          placeholder="Confirm password"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-8 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Set New Password
        </button>
        <a href="/login" className="text-blue-500 flex justify-center p-2">
          Back to login
        </a>
      </div>
    </>
  );
};

export default ResetPassword;