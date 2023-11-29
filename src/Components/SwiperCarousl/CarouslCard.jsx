"use client";
import React, { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

const CarouselCard = () => {
  const mockItems = [
    {
      id: "item-1",
      title: "Slide 1",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png", // Replace with your image URL
    },
    {
      id: "item-2",
      title: "Slide 2",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png", // Replace with your image URL
    },
    {
      id: "item-3",
      title: "Slide 3",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png", // Replace with your image URL
    },
    {
        id: "item-4",
        title: "Slide 4",
        image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png", // Replace with your image URL
    },
    {
        id: "item-5",
        title: "Slide 5",
        image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png", // Replace with your image URL
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(mockItems[0].id);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
    slideToItem, // Added this function to enable sliding by clicking on dots
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
            key={item.id}
            className={`grid aspect-[2] w-full place-items-center text-black transition-all duration-700 ${currentSlide === item.id
              ? "z-10 scale-150"
              : ""}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover rounded-xl bg-cover"
            />
            <p className="mt-2 mb-6 text-lg text-center text-black ">
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
    <div className="py-10 relative overflow-hidden bg-[#EAEAEA]">
      <div className="mx-auto w-[80%] overflow-x-clip py-[8%] relative">
        {carouselFragment}
        <div className="flex items-center justify-center space-x-2 mt-4">
          {mockItems.map((item) => (
            <button
              key={item.id}
              onClick={() => slideToItem(item.id)}
              className={`h-2 w-2 bg-blue-500 rounded-full focus:outline-none ${
                currentSlide === item.id ? 'opacity-75' : 'opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;