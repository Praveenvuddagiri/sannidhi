import React from 'react';
import CardComponent from './Cards';


const OngoingProject = () => {

    const OngoingProjectData = {
        
        image: "https://res.cloudinary.com/dagmm478n/image/upload/v1701070066/INA%20SANNIDI/Image_y1hljv.png",
        heading: "Ongoing Projects",
        description: "Prime metropolis plots, cherishing each client in Sannidhi's Happy Community, fueling constant expansion.",
        button: "Discover More",
    };

    return (
        <div>
            <CardComponent
                image={OngoingProjectData.image}
                heading={OngoingProjectData.heading}
                description={OngoingProjectData.description}
                button={OngoingProjectData.button}

            />
        </div>
    );
};

export default OngoingProject;
