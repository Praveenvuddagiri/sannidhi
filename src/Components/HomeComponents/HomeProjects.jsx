import React from 'react'
import HomeProjectCard from './HomeProjectCard'

const HomeProjects = ({ title, projects }) => {

    return (
        <div className='flex justify-center items-center mt-16 mb-16 w-full'>
            <div className=' w-[80%]'>
                <div className='flex flex-col justify-center items-center '>
                    <h2 className='text-4xl text-[#3A7CBA]'>{title}</h2>
                    <div className='bg-[#B82A26] h-[3px] w-36 mt-1 mb-5'></div>
                    <div className='flex justify-between gap-5 mt-6 flex-col lg:flex-row'>
                        {
                            projects?.map((project, index) => (
                                <HomeProjectCard key={index} image={project.image} title={project.title} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProjects
