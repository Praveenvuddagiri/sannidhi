import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderCard = ({
    image,
    title,
    heading,
    description,
    buttonLabel,
    onButtonClick,
}) => {
    return (
        <div className="relative">
              <Image
                src={image}
                alt="Hero Image"
                className="w-full h-fit object-contain"
                width={1000}
                height={1000}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-4xl font-bold">{title}</h1>
                <h2 className="text-2xl font-semibold pt-5">{heading}</h2>
                <p className="text-lg">{description}</p>
                <div className="w-full flex items-center justify-center py-9">
                  {/* Your content here */}
                </div>
              </div>
        </div>
      );
      
};

export default HeaderCard;
