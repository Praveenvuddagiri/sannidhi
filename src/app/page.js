'use client'
import React from 'react'
import Navbar from '@/Components/CommonComponents/Navbar'
import HeroSection from '@/Components/HomeComponents/HeroSection';



const navbarData = {
  logo: "https://res.cloudinary.com/dagmm478n/image/upload/v1699608917/INA%20SANNIDI/Group-1_jjr80d.png",
  links: [
    { url: '/', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/ongoing', text: 'Ongoing' },
    { url: '/upcoming', text: 'Upcoming' },
    { url: '/completed', text: 'Completed' }

  ]
}


    const heroSectionData = {
      imageUrl:"https://res.cloudinary.com/dagmm478n/image/upload/v1700833360/INA%20SANNIDI/Group_1000001900_zibnxf.png",
      title: "3 Bed - 2 Bath - 2200 Sq Ft",
      heading: "Luxurious Living Redefined",
      description: "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living",
      button: "View Property"
    }

const handleButtonClick = () => {

  console.log('Button clicked!');
};

const handleButtonHeroButtonClick = () => {
  console.log("Button clicked!");
}

const data = 
  {
    image: "",
    title: "upcoming products"
  }

 


export default function Home() {
  return (
    <div>
      <Navbar logoSrc={navbarData.logo} navLinks={navbarData.links} buttonLabel="Contact Us" onButtonClick={handleButtonClick} />
      <HeroSection
        image={heroSectionData.imageUrl}
        title={heroSectionData.title}
        heading={heroSectionData.heading}
        description={heroSectionData.description}
        buttonLabel={heroSectionData.button}
        onButtonClick={handleButtonHeroButtonClick}
        
      />



    </div>
  )
}
