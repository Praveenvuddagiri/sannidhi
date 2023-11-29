import Image from 'next/image';
import React from 'react';


const ProjectsCard = ({ image, heading, description, button }) => {
  return (
    <div className="max-w-xs  overflow-hidden shadow-lg pt-4 pb-4 rounded-xl">
      <Image src={image} alt="Sunset in the mountains" width={500} height={100} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{heading}</div>
        <p className="text-gray-700 text-center">
          {description}
        </p>
      </div>
      <div className="flex justify-center items-center px-6 pt-2 pb-2">
        <button className="bg-[#3A7CBA] rounded-lg px-4 py-2 text-white font-semibold text-sm mr-2 mb-2">
          {button}
        </button>
      </div>
    </div>
  );
}




export default ProjectsCard;
