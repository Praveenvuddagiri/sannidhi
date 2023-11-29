"use client";
import React, { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

const CarouselCard = () => {
  const mockItems = [
    {
      id: "item-1",
      title: "Slide 1",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701167272/INA%20SANNIDI/4a1d841d0499a417231c1db0a6b27d35_tgxl1d.png", // Replace with your image URL
    },
    {
      id: "item-2",
      title: "Slide 2",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701167272/INA%20SANNIDI/4a1d841d0499a417231c1db0a6b27d35_tgxl1d.png", // Replace with your image URL
    },
    {
      id: "item-3",
      title: "Slide 3",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701167272/INA%20SANNIDI/4a1d841d0499a417231c1db0a6b27d35_tgxl1d.png", // Replace with your image URL
    },
    {
        id: "item-4",
        title: "Slide 4",
        image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701167272/INA%20SANNIDI/4a1d841d0499a417231c1db0a6b27d35_tgxl1d.png", // Replace with your image URL
    },
    {
        id: "item-5",
        title: "Slide 5",
        image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701167272/INA%20SANNIDI/4a1d841d0499a417231c1db0a6b27d35_tgxl1d.png", // Replace with your image URL
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(mockItems[0].id);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: 5,
    withLoop: true,
    initialStartingPosition: "center",
    gutter: 24,
    items: mockItems.map((item) => {
      return {
        ...item,
        renderItem: (
          <div
            className={`grid aspect-[2] w-full place-items-center text-black transition-all duration-700  ${
              currentSlide === item.id
                ? "z-10 scale-150"
                : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover rounded-xl"
            />
            <p className="mt-2 text-lg text-center text-black ">
              {item.title} 
            </p>
          </div>
        ),
      };
    }),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentSlide(event?.nextItem?.id);
    }
  });

  return (
    <div className="py-20 relative bg-[#EAEAEA]">
      <button
        onClick={slideToPrevItem}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[10%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="mx-auto w-[80%] overflow-x-clip py-[8%] relative">
        {carouselFragment}
      </div>
      <button
        onClick={slideToNextItem}
        className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[10%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselCard;
