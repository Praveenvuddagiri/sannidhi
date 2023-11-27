'use client'
import React from 'react'
import Navbar from '@/Components/CommonComponents/Navbar'
import HeroSection from '@/Components/HomeComponents/HeroSection';
import Projects from '@/Components/HomeComponents/Projects';
import VideoSection from '@/Components/VideoSection';
import CtaButton from '@/Components/CtaButton';
import Footer from '@/Components/Footer';


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
    image: "https://res.cloudinary.com/dagmm478n/image/upload/v1700832675/INA%20SANNIDI/WhatsApp_Image_2023-11-24_at_6.59.57_PM_tc3crp.jpg",
    title: "upcoming products"
  }

 const VideoSectionData  =
 {
  imageUrl:"https://res.cloudinary.com/dagmm478n/image/upload/v1700833360/INA%20SANNIDI/Group_1000001900_zibnxf.png",
  title: "Take a short tour on our Venturest",
  // heading: "headingText",
  description: "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living",
  button: "Login"
}

const CtaButtonData =
{
  heading: "Contact",
  title: "Connect with us and get more details on our exciting projects",
  description: "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living. Connect and discover more on our ongoing and upcoming projects.",
  button: "Discover More",
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
    <VideoSection
        image={VideoSectionData.imageUrl}
        title={VideoSectionData.title}
        description={VideoSectionData.description}
        buttonLabel={VideoSectionData.button}
        onButtonClick={handleButtonHeroButtonClick}
        
      />
     <CtaButton
        heading={CtaButtonData.heading}
        title={CtaButtonData.title}
        description={CtaButtonData.description}
        buttonLabel={CtaButtonData.button}
        onButtonClick={handleButtonHeroButtonClick}
        
      />
   <Footer/>
    
    </div>
  )
}
