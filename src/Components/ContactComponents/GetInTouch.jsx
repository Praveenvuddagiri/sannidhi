import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center gap-8 py-5 px-40 shadow-xl rounded-2xl w-fit">
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex gap-4">
          <Image
            src="https://res.cloudinary.com/dagmm478n/image/upload/v1701239251/INA%20SANNIDI/6139564a137c1d995fb701b2a2645b8a_ry99zl.png"
            width={40}
            height={40}
            className="w-8 h-8"
          />

          <div className="">
            <h1 className="text-sm mb-2">Location</h1>
            <p className="text-justify text-[11px]">
              CO-07, Sannidhi Group, Block C, Indu <br /> Fortune Fields. THE
              ANNEXE, Phase 13, <br /> KPHB Colony. Hyderabad – 500085.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="https://res.cloudinary.com/dagmm478n/image/upload/v1701239279/INA%20SANNIDI/Vector_qlda00.svg"
            width={30}
            height={30}
            className="w-8 h-8"
          />
          <div>
            <h1>Make a Call</h1>
            <p>+(91) 9963029215</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="https://res.cloudinary.com/dagmm478n/image/upload/v1701239310/INA%20SANNIDI/Vector_1_qcsuxq.svg"
            width={30}
            height={30}
            className="w-8 h-8"
          />
          <div>
            <h1>Send a Mail</h1>
            <p>info@sannidhigroup.com</p>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>

    </div>
    
  );
};

export default GetInTouch;
