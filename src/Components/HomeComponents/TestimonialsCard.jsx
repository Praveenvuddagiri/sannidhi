import React from "react";

const CardComponent = ({ image, content, name, position }) => {
  return (
    <div className="flex items-center justify-center">
    <div className="relative flex flex-row rounded-xl bg-clip-border text-gray-700 shadow-md bg-[#F1F1F1] p-4 max-w-[50rem] transition-all duration-300 ease-in-out">
      <div className="relative m-0  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 transition-all duration-300 ease-in-out">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-end items-end mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="27"
            viewBox="0 0 37 27"
            fill="none"
            className="flex justify-end items-end"
          >
            {/* ... (unchanged) */}
          </svg>
        </div>
    
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-[#495783] antialiased">
          {content}
        </p>
        <h6 className="block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-[#202020] antialiased">
          {name}
        </h6>
        <p className="text-[#808080]">{position}</p>
      </div>
    </div>
  </div>
  
  

  );
};

export default CardComponent;
