import Image from "next/image";
import React from "react";

const AboutusSection = ({ title, image, head, content}) => {
  return (
    <div className="flex justify-center items-center  pt-1 bg-opacity-[11%] pb-10 mt-16">
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side (image) */}
        <div className="col-span-1 ">
          <div className="bg-[#FEFEFF] flex justify-end relative">
            <div className="absolute bg-[#FEFEFF] z-10 text-center p-4 shadow-2xl -top-10 right-6">
              <div className="flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154893/INA%20SANNIDI/d279fb41524e7cab4bdffe459979f72e_wadyp1.png"
                  alt="Aboutus image"
                  className="w-8 h-8 text-center mb-2"
                  width={1800}
                  height={1800}
                />
              </div>{" "}
              <div className="flex flex-row mt-1 justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154934/INA%20SANNIDI/star_1_1_zu0cag.svg"
                  alt="Aboutus image"
                  className="w-5 h-5"
                  width={1800}
                  height={1800}
                />
                <Image
                  src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154934/INA%20SANNIDI/star_1_1_zu0cag.svg"
                  alt="Aboutus image"
                  className="w-5 h-5"
                  width={1800}
                  height={1800}
                />
                <Image
                  src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154934/INA%20SANNIDI/star_1_1_zu0cag.svg"
                  alt="Aboutus image"
                  className="w-5 h-5"
                  width={1800}
                  height={1800}
                />
                <Image
                  src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154934/INA%20SANNIDI/star_1_1_zu0cag.svg"
                  alt="Aboutus image"
                  className="w-5 h-5"
                  width={1800}
                  height={1800}
                />
                <Image
                  src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154934/INA%20SANNIDI/star_1_1_zu0cag.svg"
                  alt="Aboutus image"
                  className="w-5 h-5"
                  width={1800}
                  height={1800}
                />
              </div>
              
              <div className="mt-2 text-[#B82A26] font-[400]">
                <h1>
                  15,000
                  <br />
                  HAPPY CLIENTS
                </h1>
              </div>
            </div>

            <Image src={image} height={600} width={600} className="mt-16 mb-16" />
            <div className="absolute bg-[#FEFEFF] z-10 text-center bottom-10 right-10 left-32">
              <div className="mt-2  flex justify-evenly">
                <h1 className="text-[#B82A26] font-[600] text-[48px] ">18 <span className="text-[#3A7CBA] text-[16px]">PROJECTS</span></h1>
                <h1 className="text-[#B82A26] font-[600] text-[48px]">1,800 <span className="text-[#3A7CBA] text-[16px]">ACRES</span></h1>

              </div>
            </div>
          </div>
        </div>

        {/* Right side (text) */}
        <div className="col-span-1 mt-16 mb-16">
          <div className="text-2xl text-[#3A7CBA]">
            {title}
            <div className="text-center">
            <div className="bg-[#B82A26] h-[3px] w-10 text-center mt-1 mb-5"></div>
            </div>
          </div>
          <div className="text-[24px] text-[#3A7CBA] font-lightbold mb-5">{head}</div>

          <div className="text-[14px] leading-[21px] text-justify">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
