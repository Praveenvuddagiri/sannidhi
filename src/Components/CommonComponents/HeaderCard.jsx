import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderCard = ({
    image,
    heading
   
}) => {
    return (
        <div className="relative">
          <div className="w-full h-[400px] object-cover relative opacity-100"> 
            <Image
              src={image}
              alt="Hero Image"
              className="w-full h-full"
              width={700}
              height={700}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              
              <h1 className="text-3xl font-semibold pt-5">{heading}</h1>
            
              <div className="w-full flex items-center justify-center py-9">
               
              </div>
            </div>
          </div>
       
      </div>
      
      
      );
    };

export default HeaderCard;
