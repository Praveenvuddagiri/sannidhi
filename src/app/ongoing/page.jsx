import React from "react";
import HeaderCard from "@/Components/CommonComponents/HeaderCard";
import Navbar from "@/Components/CommonComponents/Navbar";
import Footer from "@/Components/CommonComponents/Footer";
import CtaButton from "@/Components/HomeComponents/CtaButton";

import VideoSection from "@/Components/HomeComponents/VideoSection";
import Projects from "@/Components/OngoingComponents/Projects";

const navbarData = {
  logo: "https://res.cloudinary.com/dagmm478n/image/upload/v1699608917/INA%20SANNIDI/Group-1_jjr80d.png",
  links: [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/ongoing", text: "Ongoing" },
    { url: "/upcoming", text: "Upcoming" },
    { url: "/completed", text: "Completed" },
  ],
};
const HeaderCardData = {
  head: "Ongoing Projects",
  image:
    "https://res.cloudinary.com/dagmm478n/image/upload/v1701167272/INA%20SANNIDI/4a1d841d0499a417231c1db0a6b27d35_tgxl1d.png",
};

const CtaButtonData = {
  heading: "Contact",
  title: "Connect with us and get more details on our exciting projects",
  description:
    "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living. Connect and discover more on our ongoing and upcoming projects.",
  button: "Discover More",
};

const VideoSectionData = {
  imageUrl:
    "https://res.cloudinary.com/dagmm478n/image/upload/v1701079923/INA%20SANNIDI/551f83a9e1db1fd415e872f79c49d69b_dzft4l.png",
  title: "Take a short tour on our Venturest",
  description:
    "Welcome to your dream home at Sannidhi Group, where elegance meets modern comfort. This stunning property redefines the art of sophisticated living",
  imageUrl2:
    "https://res.cloudinary.com/dagmm478n/image/upload/v1701080357/INA%20SANNIDI/Group_1000001835_hv6sae.svg",
};
const ProjectData = {
  title: "Ongoing Project",

  data: [
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
    {
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
      heading: "Ongoing Projects",
      description:
        "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
      button: "Discover More",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Navbar
        logoSrc={navbarData.logo}
        navLinks={navbarData.links}
        buttonLabel="Contact Us"
        buttonLink="/contact"
      />
      <HeaderCard heading={HeaderCardData.head} image={HeaderCardData.image} />
      <Projects data={ProjectData.data} title={ProjectData.title} />
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
  );
};

export default Page;
