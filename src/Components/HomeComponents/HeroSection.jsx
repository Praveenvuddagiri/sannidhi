import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = ({
  image,
  title,
  heading,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
   
      <div className="flex flex-col items-center justify-center relative" >
        <div>
        <Image
          src={image}
          alt="Hero image"
          className="w-full h-auto"
          width={1800}
          height={1800}
        />
        </div>
        
      

        <div className="absolute w-[660px] left-14">
          <h1 className="text-[18px] text-white">{title}</h1>
          <h2 className="text-[48px] font-medium text-white">{heading}</h2>
          <p className="font-light text-white text-[20px] tracking-[0] leading-[28px] mb-16">{description}</p>
          <button
            onClick={onButtonClick}
            className="text-white text-[18px] px-6 py-3 rounded-sm border border-blue-500 bg-[#b82a26]"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    
  );
};

export default HeroSection;
