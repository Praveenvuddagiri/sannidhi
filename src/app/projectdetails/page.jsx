
import HeaderCard from '@/Components/CommonComponents/HeaderCard'
import Navbar from '@/Components/CommonComponents/Navbar'
import OngoingProject from '@/Components/OngoingComponents/Projects'
import Footer from '@/Components/CommonComponents/Footer'
import CtaButton from '@/Components/HomeComponents/CtaButton'
import React from 'react'
import VideoSection from '@/Components/HomeComponents/VideoSection'
import OverviewProject from '@/Components/OverviewComponents/OverviewProject'
import AminitesProject from '@/Components/AminitesComponents/AminitesProject'
import GalleryProject from '@/Components/GalleryComponents/galleryProject'
import LocationProject from '@/Components/LocationComponents/LocationProject'
import CarouselCard from '@/Components/SwiperCarousl/CarouslCard'


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
  head: "Projects Name",
  image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701170389/INA%20SANNIDI/4f4eb5ebc824b7cb98d72931c6ecae23_jostmw.png",
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
  description: "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living",
  imageUrl2:"https://res.cloudinary.com/dagmm478n/image/upload/v1701080357/INA%20SANNIDI/Group_1000001835_hv6sae.svg",
}

const overviewData =
{
    title: "",
    description: "",
}
const LocationProjectData = {
  heading: "Location",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.588872610337!2d78.3835117!3d17.4765913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9229daaaaaab%3A0x2d54efef3ed529b9!2sSannidhi%20Group!5e0!3m2!1sen!2sin!4v1701245050924!5m2!1sen!2sin",
};


const page = () => {
  return (
    <div>
     <Navbar logoSrc={navbarData.logo} navLinks={navbarData.links} buttonLabel="Contact Us" buttonLink="/contact" />
       <HeaderCard 
    heading={HeaderCardData.head}
    image={HeaderCardData.image}
    />
    
    <OverviewProject/>
   <AminitesProject
      />
       
      <GalleryProject/>
      <LocationProject data={LocationProjectData}/>
    
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
      <Footer />
    </div>
  )
}

export default page
