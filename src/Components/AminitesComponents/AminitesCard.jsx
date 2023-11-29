import Image from 'next/image';
import React from 'react';


const AminitesCard = ({ heading, }) => {
    return (
        <div className="text-center bg-[background: #EAEAEA] bg-slate-400">
  
            <div className="font-bold mb-2 text-4xl text-[#3A7CBA]">
                {heading}
                <div className='bg-[#B82A26] h-[3px] w-36 mt-1 mb-5 mx-auto'>Aminities</div>
            </div>
           
        </div>
    );
}

export default AminitesCard;






