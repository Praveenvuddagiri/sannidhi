import React from 'react';
import AminitesCard from './AminitesCard';


const AminitesProject = () => {

    const AminitesProjectData =
    {
        heading: "",
    }


    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-16 mb-5 text-xl'><h2 className='text-4xl text-[#3A7CBA]'>Aminities</h2>

            </div>

            <div className='flex flex-wrap gap-4 justify-center'>
                {

                    <AminitesCard
                        heading={AminitesProjectData.heading}

                    />

                }

            </div>
        </div>

    );
};

export default AminitesProject;
