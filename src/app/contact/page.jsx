import AboutusSection from '@/Components/AboutusComponents/AboutusSection'
import Footer from '@/Components/CommonComponents/Footer'
import HeaderCard from '@/Components/CommonComponents/HeaderCard'
import Navbar from '@/Components/CommonComponents/Navbar'
import Contact from '@/Components/ContactComponents/Contact'
import CtaButton from '@/Components/HomeComponents/CtaButton'
// import CtaButton from '@/Components/CtaButton'
import CardComponent from '@/Components/HomeComponents/TestimonialsCard'
import Testimonial from '@/Components/HomeComponents/Testomials'
import VideoSection from '@/Components/HomeComponents/VideoSection'
import CardsComponent from '@/Components/OngoingComponents/Cards'
import OngoingProject from '@/Components/OngoingComponents/OngoingProject'
import TestimonialSwiper from '@/Components/TestimonialSwiper'
// import VideoSection from '@/Components/VideoSection'
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
 

const HeaderCardData = {
  head: "Contact Us",
  image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701169164/INA%20SANNIDI/53bc8176464f4282fd14b3b53d205ea3_eaecbx.png",
}
const page = () => {
  return (
    <div>
      <Navbar logoSrc={navbarData.logo} navLinks={navbarData.links} buttonLabel="Contact Us" buttonLink="/contact" />

      <HeaderCard 
    heading={HeaderCardData.head}
    image={HeaderCardData.image}
    />
      <Contact/>
      
      <Footer />
    </div>
  )
}

export default page
