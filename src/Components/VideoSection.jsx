import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { FaPlay } from 'react-icons/fa';

const VideoSection = ({
  image,
  title,
  heading,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="relative">
  <div className="flex flex-col items-center justify-center h-full">
    <div className="w-full h-full object-cover relative">
      <Image
        src={image}
        alt="Hero Image"
        className="w-full h-full"
        width={700}
        height={700}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-2xl font-semibold pt-5">{heading}</h2>
        <p className="text-lg ">{description}</p>
        <div className="mt-4">
          <button
            onClick={onButtonClick}
            className="text-[#3A7CBA] text-[18px] font-[600] px-4 py-2 rounded-sm border border-blue-500"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};

export default VideoSection;
