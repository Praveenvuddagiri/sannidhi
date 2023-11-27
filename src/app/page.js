'use client'
import React from 'react'
import Navbar from '@/Components/CommonComponents/Navbar'
import HeroSection from '@/Components/HomeComponents/HeroSection';



  const navbarData = {
    logo:"https://res.cloudinary.com/dagmm478n/image/upload/v1699608917/INA%20SANNIDI/Group-1_jjr80d.png",
    links: [
      { url: '/', text: 'Home' },
      { url: '/about', text: 'About' },
      { url: '/ongoing', text: 'Ongoing' },
      { url: '/upcoming', text: 'Upcoming' },
      { url: '/completed', text: 'Completed' }
      
    ]  }


    const heroSectionData = {
      image:"https://res.cloudinary.com/dag",
      title: "titleText",
      heading: "headingText",
      description: "descriptionText",
      button: "Login"
    }

  const handleButtonClick = () => {
    
    console.log('Button clicked!');
  };

  const handleButtonHeroButtonClick = () => {
   console.log("Button clicked!");
  }

const data = [
  {
      image:"",
      title:"upcoming products"
  }
]

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
