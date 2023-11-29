import Image from 'next/image';
import React from 'react';


const LocationCard = ({ heading }) => {
    return (
        <div className="text-center ">
  
             <div className="font-bold mb-2 text-4xl text-[#3A7CBA]">
                {heading}
                <div className='bg-[#B82A26] h-[3px] w-36 mt-1 mb-5 mx-auto'></div>
            </div> 
            
           
        </div>
    );
}

export default LocationCard;






