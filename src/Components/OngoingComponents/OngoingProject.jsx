import React from 'react';
import CardComponent from './Cards';


const OngoingProject = () => {

    const OngoingProjectData = [
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
        {

            image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701155051/INA%20SANNIDI/14b800e5bdbd38e838ff76d9b76b7a7f_yv1i3i.png",
            heading: "Ongoing Projects",
            description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
            button: "Discover More",
        },
    ]

    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-16 mb-5 text-xl'><h2  className='text-4xl text-[#3A7CBA]'>On going Projects</h2>
            <div className='bg-[#B82A26] h-[3px] w-36 mt-4 mb-5'></div>
            </div>
          
            <div className='flex flex-wrap gap-4 justify-center'>
            {
            OngoingProjectData.map((item) => {
                return(
                    <CardComponent
                    image={item.image}
                    heading={item.heading}
                    description={item.description}
                    button={item.button}
    
                />
                )
            })}
          
        </div>
        </div>
        
    );
};

export default OngoingProject;
