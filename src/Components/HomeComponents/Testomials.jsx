import React, { useEffect } from 'react';
import Swiper from 'swiper';
import CardComponent from './TestimonialsCard';

const Testimonial = ({ image, content, name, position }) => {

    const testomialsCardData = {
        name: "ADMIN",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        position:"Head",
        image:"https://res.cloudinary.com/dagmm478n/image/upload/v1701070066/INA%20SANNIDI/Image_y1hljv.png"
      }
      
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Your Swiper configurations here
      // For example:
      loop: true,
      slidesPerView: 1,
      // Additional configurations...
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
        
          <div className="flex flex-col min-h-screen items-center justify-center">
          <h2 className='text-center text-4xl text-[#3A7CBA]'>Testimonial</h2>
          <div className='bg-gradient-to-r from-transparent via-[#B82A26] to-transparent h-1 w-36 mt-1 mb-12'></div>
          <CardComponent image={testomialsCardData.image} content= {testomialsCardData.content} name={testomialsCardData.name} position={testomialsCardData.position}/>
          </div>
        </div>
        
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default Testimonial;
