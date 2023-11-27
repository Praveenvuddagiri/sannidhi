'use client'
import React from 'react'
import Navbar from '@/Components/CommonComponents/Navbar'
import HeroSection from '@/Components/HomeComponents/HeroSection';
import Projects from '@/Components/HomeComponents/Projects';
import CardComponent from '@/Components/HomeComponents/TestimonialsCard';
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
      imageUrl:"https://res.cloudinary.com/dagmm478n/image/upload/v1700833360/INA%20SANNIDI/Group_1000001900_zibnxf.png",
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
const data =
{
  image: "",
  title: "upcoming products"
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
      <Testimonial/>

    </div>
  )
}
