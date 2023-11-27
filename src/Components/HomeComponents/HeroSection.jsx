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
    <div className="relative">
          <div className="flex flex-col items-center justify-center relative">
      <div className="w-full object-contain">
        <Image
          src={image}
          alt="Hero Image"
          className=""
          width={700}
          height={700}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className="text-lg">{description}</p>
        <button
          onClick={onButtonClick}
          className="text-[#3A7CBA] text-[18px] font-[600] px-4 py-2 rounded-sm border border-blue-500"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
    </div>
  
  );
};

export default HeroSection;
