import Image from 'next/image'
import React from 'react'

const data = [
    {
        image:"",
        title:"upcoming products"
    }
  ]


const Projects = ({image,title}) => {
  return (
    <div>
      <h2>Project</h2>
      <hr/>
      <div>
        <Image src={image}></Image>
        <p>{title}</p>
      </div>
    </div>

  )
}

export default Projects
