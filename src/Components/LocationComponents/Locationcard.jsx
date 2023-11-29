import Image from "next/image";
import React from "react";

const LocationCard = ({ heading, mapSrc }) => {
  return (
    <div className="text-center flex flex-col gap-2">
      <div className="text-4xl text-[#3A7CBA] flex justify-center">{heading}</div>
      <div className='bg-[#B82A26] h-[3px] w-36 mb-5 mx-auto'></div>
      <div className="h-96">
        <iframe
          title="Google Map"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationCard;
