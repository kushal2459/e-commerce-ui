import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({
  name,
  description,
  price,
  discountPrice,
  image,
  rating,
}) => {
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

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-50 overflow-auto w-full sm:w-[270px] py-3 px-5 m-5 rounded-lg shadow-md">
      <div>
        <img
          src={image}
          alt={`product_img${currentImage + 1}`}
          width={250}
          className="rounded-md shadow mt-2 mb-4"
        />
      </div>
      <div className="my-2 flex justify-between">
        <p className="text-xl inline-block">{name}</p>
        <sup className="inline-block text-xs me-2 mt-2">
          <span className="text-yellow-400">
            <FontAwesomeIcon icon={faStar} />
          </span>
          {rating}
        </sup>
      </div>
      <div className="my-2">
        <p>{description}</p>
      </div>
      <div>
        <p className="font-semibold inline-block">
          <span className="line-through text-gray-700 ">{price}</span>
          <span>{discountPrice}</span> Incl. of GST
        </p>
        <button className="bg-blue-500 text-white rounded-lg px-5 py-2 text-xl w-full my-3">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
