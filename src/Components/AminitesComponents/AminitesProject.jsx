import React from 'react';
import Overviewcard from './Overviewcard';


const AminitiesProject = () => {

    const AminitiesProjectData = [
        {
            description: "Sannidhi Group was a forerunner in the notion of bringing investors into commercial partnerships. Our projects have fetched a premium for scale and quality over, the last two decades, and investors have profited alongside the Sannidhi Group. Every project stands out from the ,others at every site because to an attitude of quality and polished aesthetic sensibility. Authenticity and integrity in dealing with consumers, as well as devotion and dedication, have established us as a recognizable name in the Real Estate industry ",
            button: "Download Brochure",
        },
    ]

    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-16 mb-5 text-xl'><h2 className='text-4xl text-[#3A7CBA]'>Aminities</h2>

            </div>

            <div className='flex flex-wrap gap-4 justify-center'>
                {
                    OverviewProjectData.map((item) => {
                        return (
                            <Overviewcard
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

export default AminitiesProject;
