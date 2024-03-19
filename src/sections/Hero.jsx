import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/3.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/1.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/4.png",
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="min-h-[550px] relative flex flex-col gap-10 items-center justify-center">
      {/* Images */}
      <div className="w-full max-w-lg h-72 md:max-w-xl md:h-96 overflow-hidden">
        <img
          src={images[currentImage]}
          alt=""
          className="w-full h-full object-cover"
        />
        <button
          className="font-bold text-gray-600 text-3xl w-[1px] rounded-full p-2 absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="font-bold text-gray-600 text-3xl rounded-full p-2 absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentImage ? "bg-blue-500" : "bg-gray-300"
            }`}
            style={{
              transition: "0.5s ease",
              transform: `scale(${index === currentImage ? 1.5 : 1})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
