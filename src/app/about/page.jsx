import AboutusSection from '@/Components/AboutusComponents/AboutusSection'
import Footer from '@/Components/CommonComponents/Footer'
import HeaderCard from '@/Components/CommonComponents/HeaderCard'
import Navbar from '@/Components/CommonComponents/Navbar'
import CtaButton from '@/Components/CtaButton'
import CardComponent from '@/Components/HomeComponents/TestimonialsCard'
import Testimonial from '@/Components/HomeComponents/Testomials'
import CardsComponent from '@/Components/OngoingComponents/Cards'
import OngoingProject from '@/Components/OngoingComponents/OngoingProject'
import VideoSection from '@/Components/VideoSection'
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
}

const testomialsCardData = {
  title: "Testimonials",
  list: [
    {
      name: "ADMIN",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      position: "Head",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701070066/INA%20SANNIDI/Image_y1hljv.png"
    },

    {
      name: "ADMIN",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      position: "Head",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701070066/INA%20SANNIDI/Image_y1hljv.png"
    },

    {
      name: "ADMIN",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      position: "Head",
      image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701070066/INA%20SANNIDI/Image_y1hljv.png"
    },

  ]
}


const CtaButtonData =
{
  heading: "Contact",
  title: "Connect with us and get more details on our exciting projects",
  description: "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living. Connect and discover more on our ongoing and upcoming projects.",
  button: "Discover More",
}



const VideoSectionData  =
 {
  imageUrl:"https://res.cloudinary.com/dagmm478n/image/upload/v1701079923/INA%20SANNIDI/551f83a9e1db1fd415e872f79c49d69b_dzft4l.png",
  title: "Take a short tour on our Venturest",
  // heading: "headingText",
  description: "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living",
  // button: "Login"
  imageUrl2:"https://res.cloudinary.com/dagmm478n/image/upload/v1701080357/INA%20SANNIDI/Group_1000001835_hv6sae.svg",
}
 

const HeaderCardData = {
  head: "About Sannidhi Group",
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
      <Testimonial title={testomialsCardData.title} list={testomialsCardData.list} />
      <VideoSection
        image={VideoSectionData.imageUrl}
        title={VideoSectionData.title}
        description={VideoSectionData.description}
        // buttonLabel={VideoSectionData.button}
        // onButtonClick={handleButtonHeroButtonClick}
        image2={VideoSectionData.imageUrl2}
        
      />
      <CtaButton
        heading={CtaButtonData.heading}
        title={CtaButtonData.title}
        description={CtaButtonData.description}
        buttonLabel={CtaButtonData.button}
        // onButtonClick={handleButtonHeroButtonClick}

      />
      <OngoingProject/>
      
      <Footer />
    </div>
  )
}

export default page
