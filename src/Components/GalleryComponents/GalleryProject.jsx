import React from 'react';
import GalleryCard from './GalleryCard';
import CarouselCard from '../SwiperCarousl/CarouslCard';


const GalleryProject = () => {

    const GalleryProjectData =
    {
        heading: "",
    }


    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-16 mb-5 text-xl'><h2 className='text-4xl text-[#3A7CBA]'>Gallery</h2>

            </div>

            <div className='flex flex-wrap gap-4 justify-center'>
                

                    <GalleryCard
                        heading={GalleryProjectData.heading}

                    />
                   <CarouselCard/>

            </div>
        </div>

    );
};

export default GalleryProject;
