import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate('/login');
  }

  const redirectToSignUpPage = () => {
    navigate('/sign-up');
  }
  
  const redirectToOTPPage = () => {
    navigate('/otp-verification');
  }

  const redirectToForgotPage = () => {
    navigate('/forgot-password');
  }

  const redirectToResetPage = () => {
    navigate('/reset-password');
  }

  return (
    <>
      <h1>Home</h1>
      <div className='flex gap-5 justify-center items-center mt-16 mx-auto'>
        <button
          onClick={redirectToLoginPage}
          className="rounded-md  bg-blue-500 text-white px-4 py-2"
        >
          Login
        </button>
        <button
          onClick={redirectToSignUpPage}
          className="rounded-md  bg-blue-500 text-white px-4 py-2"
        >
          Sign Up
        </button>
        <button
          onClick={redirectToOTPPage}
          className="rounded-md  bg-blue-500 text-white px-4 py-2"
        >
          OTP Verification
        </button>
        <button
          onClick={redirectToForgotPage}
          className="rounded-md  bg-blue-500 text-white px-4 py-2"
        >
          Forgot Password
        </button>
        <button
          onClick={redirectToResetPage}
          className="rounded-md  bg-blue-500 text-white px-4 py-2"
        >
          Reset Password
        </button>
      </div>
    </>
  );
}

export default Home