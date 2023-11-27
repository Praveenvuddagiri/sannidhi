import Image from "next/image";
import Link from "next/link";
import React from "react";

const Video = ({ image, title, heading, description, buttonLabel, onButtonClick }) => {
    return (
      <div className="relative">
        {image && (
          <div className="relative">
            <Image src={image} alt="Hero Image" className="w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              {title && <h1 className="text-2xl font-bold my-2">{title}</h1>}
              {heading && <h2 className="text-xl font-semibold my-2">{heading}</h2>}
              {description && <p className="text-sm my-2">{description}</p>}
              {buttonLabel && onButtonClick && (
                <button
                  onClick={onButtonClick}
                  className="text-[#3A7CBA] text-sm font-[600] px-4 py-2 rounded-sm border border-blue-500 mt-4"
                >
                  {buttonLabel}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  
  
  

export default Video;
