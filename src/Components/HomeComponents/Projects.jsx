import Image from 'next/image'
import React from 'react'



const Projects = ({ image, title }) => {
  return (
    <div>
      <h2>Project</h2>
      <div className="flex items-center justify-start h-screen ml-8">
        <div className="bg-blue-100 bg-opacity-75 rounded-[30px] w-[425px] h-[312px] p-8 text-[#192839]  font-semibold">
          <Image src={image} height={450} width={500} className="rounded-[30px] mx-auto" />
          <p className="text-center mt-4 text-[#192839] font-semibold text-lg">{title}</p>
        </div>
      </div>


    </div>

  )
}

export default Projects
