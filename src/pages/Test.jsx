// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Home1 = () => {

//   const navigate = useNavigate();

//   const redirectToLoginPage = () => {
//     navigate('/login');
//   }

//   const redirectToSignUpPage = () => {
//     navigate('/sign-up');
//   }
  
//   const redirectToOTPPage = () => {
//     navigate('/otp-verification');
//   }

//   const redirectToForgotPage = () => {
//     navigate('/forgot-password');
//   }

//   const redirectToResetPage = () => {
//     navigate('/reset-password');
//   }

//   return (
//     <>
//       <h1>Home1</h1>
//       <div className='flex gap-5 justify-center items-center mt-16 mx-auto'>
//         <button
//           onClick={redirectToLoginPage}
//           className="rounded-md  bg-blue-500 text-white px-4 py-2"
//         >
//           Login
//         </button>
//         <button
//           onClick={redirectToSignUpPage}
//           className="rounded-md  bg-blue-500 text-white px-4 py-2"
//         >
//           Sign Up
//         </button>
//         <button
//           onClick={redirectToOTPPage}
//           className="rounded-md  bg-blue-500 text-white px-4 py-2"
//         >
//           OTP Verification
//         </button>
//         <button
//           onClick={redirectToForgotPage}
//           className="rounded-md  bg-blue-500 text-white px-4 py-2"
//         >
//           Forgot Password
//         </button>
//         <button
//           onClick={redirectToResetPage}
//           className="rounded-md  bg-blue-500 text-white px-4 py-2"
//         >
//           Reset Password
//         </button>
//       </div>
//     </>
//   );
// }

// export default Home1

import React, { useState, useEffect } from 'react';

const TestProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["dummy1.jpg", "dummy2.jpg", "dummy3.jpg"]; // Add your image URLs here

  // Function to switch to the next image
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  // Function to shuffle images automatically every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  // Function to switch to the previous image
  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="w-64 border border-gray-300 rounded-md p-4 shadow-md">
      <div className="relative h-40 overflow-hidden rounded-md">
        <img
          src={images[currentImage]}
          alt={`Product ${currentImage + 1}`}
          className="object-cover w-full h-full"
        />
        <button
          className="absolute top-0 left-0 mt-2 ml-2 p-2 bg-gray-800 text-white rounded-full shadow"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-gray-800 text-white rounded-full shadow"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold">
          <span className="text-red-500">$50</span>{" "}
          <span className="text-gray-500 line-through">$80</span>
        </div>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TestProductCard;
