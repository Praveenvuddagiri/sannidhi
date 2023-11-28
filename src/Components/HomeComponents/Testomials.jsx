"use client";
import React, { useEffect } from "react";
import TestimonialSwiper from "../TestimonialSwiper";
// import 'swiper/css/navigation';

const Testimonial = ({ title, list }) => {
  return (
    <div className=" mt-16 mb-1">
      <div className="">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-4xl text-[#3A7CBA]">{title}</h2>
            <div className="bg-[#B82A26] h-[3px] w-36 mt-1 mb-5"></div>
            <TestimonialSwiper />
          </div>
        </div>

        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default Testimonial;
