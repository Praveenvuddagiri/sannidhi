'use client'
import React from 'react'
import Navbar from '@/Components/CommonComponents/Navbar'
import HeroSection from '@/Components/HomeComponents/HeroSection';
import Projects from '@/Components/HomeComponents/Projects';
import VideoSection from '@/Components/VideoSection';
import CtaButton from '@/Components/CtaButton';
import Footer from '@/Components/Footer';
import AboutUsCard from '@/Components/HomeComponents/AboutUsCard';
import Testimonial from '@/Components/HomeComponents/Testomials';



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
  imageUrl: "https://res.cloudinary.com/dagmm478n/image/upload/v1700833360/INA%20SANNIDI/Group_1000001900_zibnxf.png",
  title: "3 Bed - 2 Bath - 2200 Sq Ft",
  heading: "Luxurious Living Redefined !",
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


const projectsProps = {
  title: 'Projects',
  projects: [
    {
      image: 'https://res.cloudinary.com/dagmm478n/image/upload/v1701069152/INA%20SANNIDI/741685cc556a8c5f4159180ae88b1d6c_afon3i.png',
      title: 'Ongoing Projects'
    },
    {
      image: 'https://res.cloudinary.com/dagmm478n/image/upload/v1701069183/INA%20SANNIDI/a173c99195131a634f653e1d35ead7c8_lklfey.png',
      title: 'Upcoming Projects'
    },
    {
      image: 'https://res.cloudinary.com/dagmm478n/image/upload/v1701069213/INA%20SANNIDI/49673957e85c0ea743780100fb41b7f9_n3q8yu.png',
      title: 'Completed Projects'
    },
  ]
}


const aboutProps = {
  title: "About Us",
  image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701076340/INA%20SANNIDI/WhatsApp_Image_2023-11-27_at_1.18.20_PM_zkhhek.jpg",
  head: "Sannidhi Group boasts a rich legacy of more than two decades in the realm of building and property development. As one of the fastest-growing real estate developers and we have carved a distinctive niche in the industry.",
  content: "What sets them apart is their adept and experienced team, who expertly manage every aspect of their projects. With an unwavering commitment to quality, Sannidhi Group has consistently delivered impressive results. Their enduring presence in the real estate sector is a testament to their dedication and reliability. They have transformed landscapes and provided countless individuals and families with exceptional living spaces, contributing significantly to the growth and development of the regions they operate in. Every project stands out from the others at every site because to an attitude of quality and polished aesthetic sensibility. Authenticity and integrity in dealing with consumers, as well as devotion and dedication, have established us as a recognizable name in the Real Estate industry.",
  list: [
    {
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701076901/INA%20SANNIDI/afd98a4c6db89d28b9a214809e6b444c_x2juiv.png",
      value: "20",
      title: "About Us",
      content: "Sannidhi Group is a leading real estate development company in India. We are a team of professionals who are passionate about providing the best services to our customers. We are committed to providing the best services to our customers.",
    },
    {
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701076923/INA%20SANNIDI/84e6d37fa96317c5e4efd4d7c40e5e93_diuub8.png",
      value: "20",
      title: "About Us",
      content: "Sannidhi Group is a leading real estate development company in India. We are a team of professionals who are passionate about providing the best services to our customers. We are committed to providing the best services to our customers.",
    },
    {
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701076937/INA%20SANNIDI/ac6099f1a6a1918f8a151436ed2641b5_sv5wgd.png",
      value: "20",
      title: "About Us",
      content: "Sannidhi Group is a leading real estate development company in India. We are a team of professionals who are passionate about providing the best services to our customers. We are committed to providing the best services to our customers.",
    }
  ]
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
      <Navbar logoSrc={navbarData.logo} navLinks={navbarData.links} buttonLabel="Contact Us" buttonLink="/contact" />
      <HeroSection
        image={heroSectionData.imageUrl}
        title={heroSectionData.title}
        heading={heroSectionData.heading}
        description={heroSectionData.description}
        buttonLabel={heroSectionData.button}

      />
    <Projects projects={projectsProps.projects} title={projectsProps.title} />
    <AboutUsCard title={aboutProps.title} image={aboutProps.image} list={aboutProps.list} head={aboutProps.head} content={aboutProps.content} />
    <Testimonial/>
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
