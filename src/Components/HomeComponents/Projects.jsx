import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ title, projects }) => {

    return (
        <div className='flex justify-center items-center mt-10 mb-10'>
            <div className=' w-[80%]'>
                <div className='flex flex-col justify-center items-center '>
                    <h2 className='text-4xl text-[#3A7CBA]'>{title}</h2>
                    <div className='bg-gradient-to-r from-transparent via-[#B82A26] to-transparent h-1 w-36 mt-1'></div>
                    <div className='flex justify-between gap-10 mt-6 flex-col lg:flex-row'>
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index} image={project.image} title={project.title} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
