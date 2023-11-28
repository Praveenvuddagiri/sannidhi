import AboutusSection from '@/Components/AboutusComponents/AboutusSection'
import Footer from '@/Components/CommonComponents/Footer'
import HeaderCard from '@/Components/CommonComponents/HeaderCard'
import Navbar from '@/Components/CommonComponents/Navbar'
import React from 'react'

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

const AboutusSectionProps = {
  head: "KNOW MORE ABOUT US",
  title: "About Us",
  image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701087616/INA%20SANNIDI/1c3c5ae4d19bb75875b697b286763515_vrnbs7.png",
 
  content: "What sets them apart is their adept and experienced team, who expertly manage every aspect of their projects. With an unwavering commitment to quality, Sannidhi Group has consistently delivered impressive results. Their enduring presence in the real estate sector is a testament to their dedication and reliability. They have transformed landscapes and provided countless individuals and families with exceptional living spaces, contributing significantly to the growth and development of the regions they operate in. Every project stands out from the others at every site because to an attitude of quality and polished aesthetic sensibility. Authenticity and integrity in dealing with consumers, as well as devotion and dedication, have established us as a recognizable name in the Real Estate industry.",
  list: [
    
   
    {
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701076937/INA%20SANNIDI/ac6099f1a6a1918f8a151436ed2641b5_sv5wgd.png",
      value: "20",
      title: "About Us",
      content: "Sannidhi Group is a leading real estate development company in India. We are a team of professionals who are passionate about providing the best services to our customers.<br/> We are committed to providing the best services to our customers.",
    }
  ]
}

const HeaderCardData = {
  head: "KNOW MORE ABOUT US",
  image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701087786/INA%20SANNIDI/cd93630f24a63cb69f550cae5613ad9e_gaxe30.png",
}
const page = () => {
  return (
    <div>
      <Navbar logoSrc={navbarData.logo} navLinks={navbarData.links} buttonLabel="Contact Us" buttonLink="/contact" />

      <HeaderCard 
    heading={HeaderCardData.head}
    image={HeaderCardData.image}
    />
      <AboutusSection title={AboutusSectionProps.title} image={AboutusSectionProps.image} list={AboutusSectionProps.list} head={AboutusSectionProps.head} content={AboutusSectionProps.content} />
   
      <Footer />
    </div>
  )
}

export default page
