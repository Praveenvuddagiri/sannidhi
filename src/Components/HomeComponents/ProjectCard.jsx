import Image from 'next/image'
import React from 'react'



const ProjectCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center bg-blue-100 bg-opacity-75 rounded-[30px] w-[400px] h-[300px] p-5 text-[#192839] font-semibold">
      <Image src={image} height={455} width={500} className="rounded-[30px] mb-4" />
      <p className="text-center text-[#192839] font-semibold text-lg p-2">{title}</p>
    </div>

  )
}

export default ProjectCard
