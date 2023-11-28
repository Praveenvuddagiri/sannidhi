import Image from 'next/image'
import React from 'react'

const AboutusSection = ({ title, image, head, content, list }) => {
    return (
        <div className='flex justify-center items-center mt-5 pt-10 bg-opacity-[11%] pb-10'>
        <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Left side (image) */}
            <div className='col-span-1'>
                <Image src={image} height={380} width={380} className='mt-5' />
            </div>
    
            {/* Right side (text) */}
            <div className='col-span-1'>
                <div className='text-2xl text-[#3A7CBA]'>
                    {title}
                    <div className='bg-[#B82A26] h-[3px] w-36 mt-1 mb-5'></div>

                </div>
                <div className='text-3xl text-[#3A7CBA] font-lightbold'>
                   
                    {head}

                </div>
                
                <div className='text-[14px] leading-[21px] text-justify'>
                    {content}
                </div>
            </div>
        </div>
    </div>
    
    
    
    )
}

export default AboutusSection
