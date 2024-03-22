import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({
  id,
  name,
  description,
  price,
  discountPrice,
  image,
  rating,
}) => {
  const navigate = useNavigate();
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
    <div className="relative flex flex-col items-center justify-center bg-gray-50 overflow-auto p-3 shadow-md">
      <div className="flex items-center">
        <img
          src={image}
          alt={`product_img${currentImage + 1}`}
          width={250}
          className="rounded-md shadow mt-2 mb-4 w-full object-cover"
          onClick={() => navigate(`/productinfo/${id}`)}
        />
      </div>
      <div className="p-2">
        <div className="relative">
          <p className="text-xl inline-block mr-8">product nameeee: {name}</p>
          <sup className="absolute block right-0 text-xs me-2 mt-2">
            <span className="text-yellow-400 mr-1">
              <FontAwesomeIcon icon={faStar} />
            </span>
            {rating}
          </sup>
        </div>
        <div className="my-2">
          <p>description:{description}</p>
        </div>
        <p className="font-semibold inline-block">
          <span className="line-through text-gray-700 ">{price}</span>
          <span>{discountPrice}</span> Incl. of GST
        </p>
      </div>
      <div className="w-full">
        <button className="w-full bg-blue-500 text-white rounded-lg py-2 text-xl my-3">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
