import Image from 'next/image'
import React from 'react'



const HomeProjectCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center bg-blue-100 bg-opacity-75 rounded-[30px] w-[400px] h-[300px] p-5 text-[#192839] font-semibold">
  <img
    src={image}
    alt={title}
    className="object-cover rounded-[30px] mb-4 w-full h-64"
  />
  <p className="text-center text-[#192839] font-semibold text-lg p-2">{title}</p>
</div>
  )
}

export default HomeProjectCard
