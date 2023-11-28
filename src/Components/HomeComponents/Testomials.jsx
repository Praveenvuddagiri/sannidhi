"use client"
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from './TestimonialsCard';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';



const Testimonial = ({ title, list }) => {

  return (
    <div className="swiper-container mt-16 mb-1">
      <div className="swiper-wrapper">
        <div className="swiper-slide">

          <div className="flex flex-col items-center justify-center">
            <h2 className='text-center text-4xl text-[#3A7CBA]'>{title}</h2>
            <div className='bg-[#B82A26] h-[3px] w-36 mt-1 mb-5'></div>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination,  Autoplay]}
              navigation={true}
              className="mySwiper"
            >
              {
                list?.map((testomialsCardData) =>

                  <SwiperSlide>
                    <div className='m-10'>

                      <CardComponent
                        image={testomialsCardData.image}
                        content={testomialsCardData.content}
                        name={testomialsCardData.name}
                        position={testomialsCardData.position} />
                    </div>

                  </SwiperSlide>
                )
              }
            </Swiper>
          </div>
        </div>

        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default Testimonial;
