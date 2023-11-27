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
   
      <div className="flex flex-col items-center justify-center relative">
        <Image
          src={image}
          alt="Hero image"
          className="w-full h-fit"
          width={600}
          height={600}
        />
      

        <div className="absolute  flex flex-col gap-8">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <h2 className="text-4xl font-bold text-white">{heading}</h2>
          <p className="text-lg">{description}</p>
          <button
            onClick={onButtonClick}
            className="text-[#3A7CBA] text-[18px] font-[600] px-4 py-2 rounded-sm border border-blue-500"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    
  );
};

export default HeroSection;
