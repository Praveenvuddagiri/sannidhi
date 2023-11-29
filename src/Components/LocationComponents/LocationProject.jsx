import React from 'react';
import LocationCard from './LocationCard';


const LocationProject = () => {

    const LocationProjectData =
    {
        heading: "",
    }


    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-16 mb-5 text-xl'><h2 className='text-4xl text-[#3A7CBA]'>Location</h2>

            </div>

            <div className='flex flex-wrap gap-4 justify-center'>
                {

                    <LocationCard
                        heading={LocationProjectData.heading}

                    />

                }

            </div>
        </div>

    );
};

export default LocationProject;
