"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { testomialsCardData } from "@/app/about/page";
import CardComponent from "./HomeComponents/TestimonialsCard";
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const TestimonialSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={3}
      pagination={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {testomialsCardData.list.map((item) => {
        return (
          <SwiperSlide>
            <CardComponent
              image={item.image}
              content={item.content}
              name={item.name}
              position={item.position}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSwiper;
