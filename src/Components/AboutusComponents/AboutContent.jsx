import Image from "next/image";
import React from "react";

const AboutContent = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-5 bg-opacity-[11%] bg-[#B3CEEB] p-20 mb-10">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-10 h-[60%]">
          {/* Left side (image) */}
          <div className="col-span-1 p-20">
            <div className="flex justify-center items-center flex-col">
              <div>
                <h1 className="text-black text-[22px] font-[500] mb-2">
                  EXPERIENCE A LUXURIOUS WAY OF LIFE
                </h1>
                <p className="text-black text-[12px] font-[300] mb-2">
                  “THE MOST IMPORTANT CHARACTERISTIC OF ANY GREAT BUILDING IS
                  <span className="flex justify-center items-center">
                    THAT IT’S WELL PROPORTIONED.”
                  </span>
                </p>
                <p className="text-black text-center font-MonteCarlo text-sm font-normal leading-6">
                  Venu Gopal Reddy
                </p>
                <div className="flex justify-center items-center mt-8 mb-8">
                  <hr className="w-96" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Image
                    src="https://res.cloudinary.com/dagmm478n/image/upload/v1701070066/INA%20SANNIDI/Image_y1hljv.png"
                    height={60}
                    width={60}
                    className="mt-5 rounded-[80px]"
                  />
                </div>
                <div className="mt-8">
                  <p className="text-black font-Inter text-base font-medium">
                    Venu Gopal Reddy - Managing Partner
                  </p>
                  <p className="text-black text-center font-Monsieur-La-Doulaise text-base font-normal leading-6">
                    Venu Gopal Reddy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (text) */}
          <div className="col-span-1 bg-white shadow-lg">
            <div className="grid grid-cols-2 gap-8 p-10">
            <div>
              <Image
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154321/6bcd0f61ae4cfe9e1693c64481726382_ckhoxe.png"
                height={40}
                width={40}
                className="mb-4"
              />
              <h1 className="mb-2 text-[20px] font-[500] text-[#3A7CBA]">Expert Engineers</h1>
              <p>
                Wisdom new and valley answer. Contented it so is discourse
                recommend:
              </p>
            </div>{" "}
            <div className="mb-4">
              <Image
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154390/1e6c512e94d94850a2a39a442189ec77_icvn38.png"
                height={40}
                width={40}
                className="mb-4"
              />
              <h1 className="mb-2 text-[20px] font-[500] text-[#3A7CBA]">Happy Community</h1>
              <p>
                Prime metropolis plots, cherishing each client in Sannidhi's
                Happy Community, fueling constant expansion.
              </p>
            </div>{" "}
            <div>
              <Image
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154447/INA%20SANNIDI/1016f37ef7158dd6fa689f68f6c3f034_thyzpn.png"
                height={40}
                width={40}
                className="mb-4"
              />
              <h1 className="mb-2 text-[20px] font-[500] text-[#3A7CBA]">Creative</h1>
              <p>
                Meticulously designed square feet for optimal utility, aesthetic
                value, and end-to-end perfection in quality.
              </p>
            </div>{" "}
            <div>
              <Image
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1701154506/INA%20SANNIDI/8306e2909e8e091fbac24045583e32ec_affmzz.png"
                height={40}
                width={40}
                className="mb-4"
              />
              <h1 className="mb-2 text-[20px] font-[500] text-[#3A7CBA]">Modern Equipments</h1>
              <p>Wisdom new and valley answer. Contented it so is discourse</p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
