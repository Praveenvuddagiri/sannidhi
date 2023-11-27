import Image from 'next/image'
import React from 'react'

const AboutUsCard = ({ title, image, head, content, list }) => {
    return (
        <div className='flex justify-center items-center mt-5 pt-10 mb-10 bg-[#3A7CBA] bg-opacity-[11%] pb-10'>
            <div className=' w-[80%]'>
                <div className='flex flex-col justify-center items-center '>
                    <h2 className='text-4xl text-[#3A7CBA]'>{title}</h2>


                    <div className='bg-gradient-to-r from-transparent via-[#B82A26] to-transparent h-0.5 w-36 mt-1 mb-3'></div>
                    <div className='text-center w-[55%] text-[16px] leading-[24px]'>
                        {head}
                    </div>
                    <div className='flex justify-between mt-5 w-full items-center gap-10 '>
                        <div>
                            <div className='text-[14px] leading-[21px] text-justify'>
                                {content}
                            </div>
                            <div className='mt-4'>
                                {
                                    list?.map((item, index) => {
                                        return (
                                            <div key={index} className='flex justify-center items-center gap-3'>
                                                <div className='bg-[#3A7CBA] bg-opacity-[18%] flex justify-center items-center p-6 rounded-md'>
                                                    <Image src={item.image} alt={item.title} width={70} height={70} className='' />
                                                </div>
                                                <div>
                                                    <div>
                                                        <span className='text-[20px] text-[#B82A26] font-[500] mr-1'>{item.value}</span>
                                                        <span>{item.title}</span>
                                                    </div>
                                                    <p className='text-[#616161] text-[14px]'>
                                                        {item.content}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Image src={image} height={380} width={380} className='mt-5' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsCard
