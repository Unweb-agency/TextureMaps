import Container from '@/style/Container'
import React from 'react'
import Image from 'next/image'
import founderImage from "../../../public/about-us/founder.png"

const MeetOurFounderCard = () => {
    return (
        <Container>
            <div className='w-full bg-linear-to-b from-[#0772DC] to-[#031221] pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[170px] px-4 sm:px-8 md:px-10 lg:px-20 rounded-2xl md:rounded-3xl lg:rounded-4xl mt-20 sm:mt-[85px] md:mt-[90px] lg:mt-[100px] pb-4 sm:pb-6'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex flex-col justify-start items-start text-start'>
                        <h1 className='text-white font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[100px]'>
                            Let&apos;s meet the Founder !
                        </h1>
                        <p className='text-[#0772DC] font-medium italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5'>
                            Sachin Surekha
                        </p>
                    </div>
                    <Image
                        src={founderImage}
                        alt='sachin surekha'
                        height={1000}
                        width={1000}
                        className='max-w-[500px] w-full h-auto object-cover border-b-4 border-b-[#D9D9D9]]'
                        loading='lazy'
                    />
                </div>

                <div className='flex flex-col justify-start items-start text-justify mt-10 md:mt-14 gap-4 sm:gap-6 md:gap-7.5'>
                    <p className='text-white font-medium leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px]'>
                        Graduating from a premier fashion institute and worked with globally recognized brands like GAP, Tommy Hilfiger, and Uniqlo laid a strong foundation for my corporate journey. Yet, at the back of my mind, I always aspired to do more — to help apparel brands streamline their product development process by integrating the right tools, technical know-how, and creative strategy. 
                        What started as an idea has now grown into a dynamic team of 22 experts specializing in Print/Graphics, Design Development, Tech Pack Creation, 3D Mockups, E-commerce Imagery, and High-End Animation. Today, we proudly collaborate with leading apparel brands, helping them accelerate development timelines, elevate product visuals, and bring creative visions to life — all with precision and impact.
                    </p>
                    <p className='text-[#0772DC] font-bold leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px]'>
                        With this vision, Texturemaps was born.
                    </p>
                    <p className='text-white font-medium leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px]'>
                        What started as an idea has now grown into a dynamic team of 22 experts specializing in Print/Graphics, Design Development, Tech Pack Creation, 3D Mockups, E-commerce Imagery, and High-End Animation. Today, we proudly collaborate with leading apparel brands, helping them accelerate development timelines, elevate product visuals, and bring creative visions to life — all with precision and impact.
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center text-center mt-14 sm:mt-16 md:mt-20 lg:mt-24'>
                    <h2 className='text-[#0772DC] font-bold leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px] italic'>
                        “ Texturemaps envision a sustainable, innovation driven fashion industry that cares for our planet and caters to its consumers efficiently and effectively. “
                    </h2>
                    <p className='italic font-semibold text-[#D9D9D9] mt-3 md:mt-5 text-sm sm:text-base md:text-[18px] lg:text-[120x]'>
                        - Sachin Surekha
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default MeetOurFounderCard