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
        <div className="relative flex py-10">

            <div className="w-1/2 p-10">

                <h1 className="text-3xl text-[#B82A26]">{heading}</h1>
                <h3 className="text-2xl w-[70%] pt-5">{title}</h3>

            </div>
            <div className="w-1/2 p-8 flex flex-col justify-between">
                <p className="text-lg pt-8">{description}</p>
                <div className="pt-5">
                    <button
                        onClick={onButtonClick}
                        className="text-white bg-[#3A7CBA] hover:[#3A7CBA] text-lg  px-4 py-2 rounded-lg border border-blue-500 flex items-center justify-center"
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>

        </div>





    );
};

export default CtaButton;
