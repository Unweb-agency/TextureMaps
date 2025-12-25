"use client"

import Container from '@/style/Container'
import dynamic from 'next/dynamic'
import Link from 'next/link';
import React from 'react'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ThreeDMockups = () => {
    return (
        <Container>
            <section className='relative w-full flex flex-col justify-center items-center text-center mt-10 bg-linear-to-b from-[#092037] to-[#17589B] rounded-2xl md:rounded-3xl lg:rounded-4xl px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8 lg:pb-10 pt-6 shadow-[-4px_-4px_0_0_#02100E]'>
                    <h3 className='uppercase text-[#0772DC] font-bold text-[17px] md:text-[18px] lg:text-[20px]'> 3d mockups & high-end animations </h3>

                <p className='text-[#D9D9D9] font-bold leading-normal text-sm md:text-base lg:text-[18px] mt-3'>
                    Bring your pieces to life before production — cutting costs and time, paired with next-level visual storytelling for campaigns, lookbooks, and digital experiences. 
                </p>

                {/* Video Player */}
                <div className="relative w-[1400px] max-w-full mt-12 md:mt-14 rounded-3xl overflow-hidden">
                    <div className="relative pt-[56.25%]">
                        <ReactPlayer
                            src="https://www.youtube.com/watch?v=m6rC_bMPLG8"
                            width="100%"
                            height="100%"
                            className="absolute top-0 left-0"
                            controls
                        />
                    </div>
                </div>
            </section>

            <div className='w-full flex justify-center text-center mt-9'>
                <Link href={"/services"}>
                        <span className='bg-linear-to-b from-[#0772DC] to-[#092037] bg-clip-text text-transparent uppercase font-bold text-base sm:text-[17px] md:text-[18px] lg:text-[20px]'> explore all services </span>
                </Link>
            </div>
        </Container>
    )
}

export default ThreeDMockups