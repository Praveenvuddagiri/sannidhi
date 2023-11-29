import Image from 'next/image';
import React from 'react';


const AminitesCard = ({ heading, description, button }) => {
    return (
        <div className="text-center bg-[background: #EAEAEA]">
  
            <div className="font-bold mb-2 text-4xl text-[#3A7CBA]">
                {heading}
                <div className='bg-[#B82A26] h-[3px] w-36 mt-1 mb-5 mx-auto'></div>
            </div>
            <p className="text-gray-700  mx-auto w-[50%]">
                {description}
            </p>
            <div className="mt-5">
                <button className="bg-[#3A7CBA] rounded-lg px-4 py-2 text-white font-semibold text-sm">
                    {button}
                </button>
            </div>
        </div>
    );
}

export default AminitesCard;






