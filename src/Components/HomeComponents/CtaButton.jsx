import Image from "next/image";
import Link from "next/link";
import React from "react";

const CtaButton = ({
    image,
    title,
    heading,
    description,
    buttonLabel,
    onButtonClick,
}) => {
    return (
        <div className="relative flex py-10 mx-20">

        <div className="w-1/2 p-10">
            <h1 className="text-3xl text-[#3A7CBA]">{heading}</h1>
            <div className='bg-[#B82A26] h-[3px] w-16 mt-1 mb-5'></div>
            <h3 className="text-2xl w-[80%] pt-5">{title}</h3>
        </div>
    
        <div className="w-1/2 p-8 flex flex-col justify-between">
            <p className="text-lg pt-8 text-[#4F4F4F]">{description}</p>
            <div className="pt-5">
                <button
                    onClick={onButtonClick}
                    className="text-[#B82A26] font-semibold hover:[#B82A26] text-lg px-4 py-2   rounded-lg border-2 border-[#B82A26] flex items-center justify-center"

                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    
    </div>
    





    );
};

export default CtaButton;
