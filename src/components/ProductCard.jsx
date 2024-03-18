import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";


const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const img = [
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/3.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/1.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/4.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/5.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/6.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/8.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/9.png",
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % img.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage]);
 
  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? img.length - 1 : currentImage - 1);
  };

  return (
    <div className="bg-gray-200 overflow-auto w-[260px] p-3 m-5 rounded-lg">
      <img src={img[currentImage]} alt="product_img" width={250} />
      <p className="text-xl inline-block">Product Name</p>
      <p className="inline-block">
        <FontAwesomeIcon icon={faStar} />
        4.5 (20)
      </p>
      <p>Description</p>
      <p className="font-semibold">
        <span className="line-through text-gray-700 ">$3.00</span>{" "}
        <span>$2.00</span> Incl. of GST
      </p>
      <button className="bg-blue-500 text-white rounded-lg px-5 py-2 text-xl">
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
}

export default ProductCard