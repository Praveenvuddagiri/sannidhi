import React from "react";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  return (
    <div className="flex flex-col relative h-[850px] mt-10">
      <div className="h-96">
        <iframe
          title="Google Map"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.588872610337!2d78.3835117!3d17.4765913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9229daaaaaab%3A0x2d54efef3ed529b9!2sSannidhi%20Group!5e0!3m2!1sen!2sin!4v1701245050924!5m2!1sen!2sin"
     
        ></iframe>
      </div>
      <div className="absolute z-10 bg-white top-[35%] left-[11%] rounded-2xl">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Contact;

