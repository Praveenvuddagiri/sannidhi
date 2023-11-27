'use client'
import React from 'react'
import Navbar from '@/Components/CommonComponents/Navbar'
import HeroSection from '@/Components/HomeComponents/HeroSection';
import Projects from '@/Components/HomeComponents/Projects';
import AboutUsCard from '@/Components/HomeComponents/AboutUsCard';



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


const handleButtonHeroButtonClick = () => {
  console.log("Button clicked!");
}



const projectsProps = {
  title: 'Projects',
  projects: [
    {
      image: '/images/project1.png',
      title: 'Ongoing Projects'
    },
    {
      image: '/images/project1.png',
      title: 'Upcoming Projects'
    },
    {
      image: '/images/project1.png',
      title: 'Completed Projects'
    },
  ]
}
const data =
{
  image: "",
  title: "upcoming products"
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

    </div>
  )
}
