import React from 'react'
import Image from 'next/image'
import bubbles from "../../../public/images/bubbles.png"
import Container from '@/style/Container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { WateryReveal } from '@/style/SmoothReveal'

// Grid services data
const services = [
    { title: "Fashion Design", content: "Custom designs that speaks your brand", imgURL: "/images/graphic_design.png", redirectURL: "/services?fashion-design" },
    { title: "Prints", content: "Exclusive artworks designed for your brand", imgURL: "/images/prints.png", redirectURL: "/services?prints" },
    { title: "Graphics", content: "Captivating graphics for visual storytelling", imgURL: "/images/graphics.png", redirectURL: "/services?graphics" },
    { title: "Techpack Creation", content: "Precise, production-ready techpack that brings clarity to manufacturers.", imgURL: "/images/tech_pack_creation.png", redirectURL: "/services?techpack-creation" },
    { title: "Virtual/Physical Fitting", content: "Perfecting Fit, Physically and Virtually.", imgURL: "/images/virtual_fitting.png", redirectURL: "/services?virtual-physical-fitting" },
    { title: "Ecom-Imagery", content: "High-converting product shots complimenting Brand story.", imgURL: "/images/ecom_imagery.png", redirectURL: "/services?ecom-imagery" },
]

const OurServices = () => {
    return (
        <section className='relative w-full mt-[60px] sm:mt-[70px] md:mt-20 lg:mt-[120px]' id='services'>
            <Image src={bubbles} alt='bubbles' width={1000} height={1000} className='absolute right-0 -top-10 max-w-[100px] sm:max-w-[120px] md:max-w-[130px] lg:max-w-[140px] w-full h-auto -z-10' />

            <Container>
                <h2 className='text-[#0772DC] font-extrabold text-3xl md:text-4xl lg:text-5xl'> Our services </h2>
                <WateryReveal>
                    <p className='font-bold text-white leading-snug text-sm sm:text-base md:text-[18px] lg:text-[20px] w-[1200px] max-w-full mt-5 sm:mt-6 md:mt-7'>
                        We offer services that drive real results—whether you are launching a brand or need support in existing services, we plug in where you need us most with specialized expertise. so you can focus on building your brand with confidence.
                    </p>
                </WateryReveal>

                {/*  Services Card */}
                <div className='bg-linear-to-b from-[#081E35] to-[#113760] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[30px] sm:mt-10 md:mt-[45px] lg:mt-[50px] gap-[66px] sm:gap-[88px] px-[50px] py-[42px] rounded-2xl sm:rounded-3xl md:rounded-4xl backdrop-blur-md'>
                    {
                        services.map((serviceData, index) => (
                            <WateryReveal key={index}>
                                <div className='flex flex-col justify-between items-center text-center'>
                                    <h3 className='uppercase text-[#0772DC] font-bold text-[17px] md:text-[18px] lg:text-[20px]'> {serviceData.title} </h3>
                                    <p className='text-[#D9D9D9] font-bold leading-normal text-sm md:text-base lg:text-[18px] mt-3'> {serviceData.content} </p>
                                    <div className='group relative flex flex-row mt-8'>
                                        <Image
                                            src={`${serviceData.imgURL}`}
                                            alt={`${serviceData.title}`}
                                            height={1000}
                                            width={1000}
                                            className='max-w-[400px] w-full aspect-square object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-200 ease-in-out shadow-[8px_8px_16px_#0772DC] md:shadow-none md:group-hover:shadow-[8px_8px_16px_#0772DC]'
                                        />
                                        <div className='absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl pointer-events-none' />
                                        <Link href={`${serviceData.redirectURL}`}>
                                            <Button className='opacity-100 md:opacity-0 md:group-hover:opacity-100 px-8 h-12 md:px-10 md:h-14 rounded-full cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0772DC] font-bold bg-[#031221] text-sm md:text-base lg:text-[18px] shadow-[inset_3px_3px_5px_#0772DC,inset_-3px_3px_5px_#0772DC] hover:bg-black transition-all ease-in-out duration-200 hover:text-white'>
                                                Explore
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </WateryReveal>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default OurServices