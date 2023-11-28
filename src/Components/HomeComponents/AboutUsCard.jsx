import Image from 'next/image'
import React from 'react'

const AboutUsCard = ({ title, image, head, content, list }) => {
    return (
        <div className='flex justify-center items-center mt-5 pt-0 bg-[#3A7CBA] bg-opacity-[11%] pb-16  '>
            <div className=' w-[90%]'>
                <div className='flex flex-col justify-center items-center mt-16 mb-16'>
                    <h2 className='text-4xl text-[#3A7CBA]'>{title}</h2>


                    <div className='bg-[#B82A26] h-[3px] w-36 mt-1 mb-5 '></div>
                    <div className='text-center w-[50%] text-[16px] leading-[24px]'>
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
                                                <div className='bg-[#3A7CBA] bg-opacity-[18%] flex justify-center items-center p-6 rounded-md mb-3'>
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
