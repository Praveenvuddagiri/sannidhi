'use client'
import React from 'react'
import Navbar from '@/Components/Navbar'
import HeroSection from '@/Components/HeroSection';
import Projects from '@/Components/Projects';
import Video from '@/Components/video';



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

const data = 
  {
      image:"https://res.cloudinary.com/dagmm478n/image/upload/v1700832675/INA%20SANNIDI/WhatsApp_Image_2023-11-24_at_6.59.57_PM_tc3crp.jpg",
      title:"Ongoing Products"
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
      <Projects image={data.image} title={data.title}/>
      {/* <Video image={data.image} title={data.title}/> */}


  
    
    </div>
  )
}
