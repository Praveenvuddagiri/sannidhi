import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoSection = ({ image, image2, title, heading, description, onButtonClick, buttonLabel }) => {
  return (
    <div className="relative">
    <div className="flex flex-col items-center justify-center h-[700px]"> {/* Adjusted height in pixels */}
      <div className="w-full h-[600px] object-cover relative opacity-100"> {/* Adjusted height in pixels */}
        <Image
          src={image}
          alt="Hero Image"
          className="w-full h-full"
          width={700}
          height={700}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h2 className="text-2xl font-semibold pt-5">{heading}</h2>
          <p className="text-lg">{description}</p>
          <div className="w-full flex items-center justify-center py-9">
            <Image
              src={image2}
              alt="fav Image"
              className="w-[49px]"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default VideoSection;
