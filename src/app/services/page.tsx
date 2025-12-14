import HeroCommon from '@/style/HeroCommon'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// BUNDLE 1 => contains data for "Print" and "Graphics"
const bundle1 = [
    // Prints
    {
        title: "Prints",
        subpara: "Have a project in mind? Questions? Just want to say hello? We’re here to help you build smarter with 3D + AI solutions.",
        href: "/services/prints",
        categories: [
            { name: "Kids", imageURL: "/services/kids-photo.jpg" },
            { name: "Men", imageURL: "/services/male-photo.jpg" },
            { name: "Women", imageURL: "/services/female-photo.jpg" },
        ]
    },
    //Graphics
    {
        title: "Graphics",
        subpara: "Have a project in mind? Questions? Just want to say hello? We're here to help you build smarter with 3D + AI solutions.",
        href: "/services/graphics",
        categories: [
            { name: "Kids", imageURL: "/services/kids-photo.jpg" },
            { name: "Men", imageURL: "/services/male-photo.jpg" },
            { name: "Women", imageURL: "/services/female-photo.jpg" },
        ]
    },
]

// BUNDLE 2 => contains data for "E-commerce Imagery" and "Techpack Creation"
const bundle2 = [
    // E-commernce Imagery
    {
        title: "E-commerce Imagery",
        subpara: "Have a project in mind? Questions? Just want to say hello? We’re here to help you build smarter with 3D + AI solutions.",
        href: "/services/ecom-imagery",
        categories: [
            { name: "Kids", imageURL: "/services/kids-photo.jpg" },
            { name: "Men", imageURL: "/services/male-photo.jpg" },
            { name: "Women", imageURL: "/services/female-photo.jpg" },
        ]
    },
    // Techpack Creation
    {
        title: "Techpack Creation",
        subpara: "Have a project in mind? Questions? Just want to say hello? We’re here to help you build smarter with 3D + AI solutions.",
        href: "/services/techpack-creation",
        categories: [
            { name: "Kids", imageURL: "/services/kids-photo.jpg" },
            { name: "Men", imageURL: "/services/male-photo.jpg" },
            { name: "Women", imageURL: "/services/female-photo.jpg" },
        ]
    },
]

// BUNDLE 3 => contains data for "Fashion Design" and "Virtual/Physical Fitting"
const bundle3 = [
    // Fashion Design
    {
        title: "Fashion Design",
        subpara: "Have a project in mind? Questions? Just want to say hello? We’re here to help you build smarter with 3D + AI solutions.",
        href: "/services/fashion-design",
        categories: [
            { name: "Kids", imageURL: "/services/kids-photo.jpg" },
            { name: "Men", imageURL: "/services/male-photo.jpg" },
            { name: "Women", imageURL: "/services/female-photo.jpg" },
        ]
    },
    // Virtual/Physical Fitting
    {
        title: "Virtual/Physical Fitting",
        subpara: "Have a project in mind? Questions? Just want to say hello? We’re here to help you build smarter with 3D + AI solutions.",
        href: "/services/virtual-physical-fitting",
        categories: [
            { name: "Kids", imageURL: "/services/kids-photo.jpg" },
            { name: "Men", imageURL: "/services/male-photo.jpg" },
            { name: "Women", imageURL: "/services/female-photo.jpg" },
        ]
    },
]

const Page = () => {
    return (
        <main className='relative'>
            <div className='px-4 md:px-6 mt-10 sm:mt-5 translate-y-0 md:-mt-24 z-10'>
                <HeroCommon title='Services' para='We help fashion brands simplify processes, save time, and stay future-ready with cutting-edge digital solutions powered by 3D and AI.' />
            </div>


            {/* BUNDLE - 1 */}
            <div className='w-full px-4 md:px-6 mt-6 md:mt-8'>
                <div className='bg-linear-to-b from-[#0772DC] to-[#03122100] rounded-2xl md:rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center gap-y-[60px] sm:gap-y-[70px] md:gap-y-[85px] lg:gap-y-[100px] p-4 sm:p-6 md:p-10 lg:p-[72px]'>
                    {
                        bundle1.map((service, index) => (
                            <div className='w-full flex flex-col justify-center items-center' key={index}>
                                <h2 className='text-white font-semibold uppercase text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]'> {service.title} </h2>

                                <p className='font-normal text-white mt-1.5 leading-tight max-w-[750px] w-full text-center text-base sm:text-[17px] md:text-[18px] lg:text-[20px]'> {service.subpara} </p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 gap-10'>
                                    {service.categories.map((category, index) => (
                                        <div className='w-full flex flex-col justify-center items-center text-center gap-y-2' key={index}>
                                            {/* <p className='font-bold text-white text-[18px] sm:text-[20px] md:text-[22.5px] lg:text-[24px] uppercase'> {category.name} </p> */}
                                            <div className='group relative flex flex-row'>
                                                <Image
                                                    src={`${category.imageURL}`}
                                                    alt={`${category.name}`}
                                                    height={1000}
                                                    width={1000}
                                                    className='max-w-[400px] w-full aspect-square object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-200 ease-in-out group-hover:shadow-[8px_8px_16px_#0772DC]'
                                                />
                                                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl pointer-events-none' />
                                                <Link href={`${service.href}`}>
                                                    <Button className='opacity-0 group-hover:opacity-100 px-8 h-12 md:px-10 md:h-14 rounded-full cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0772DC] font-bold bg-[#031221] text-sm md:text-base lg:text-[18px] shadow-[inset_3px_3px_5px_#0772DC,inset_-3px_3px_5px_#0772DC] hover:bg-black transition-all ease-in-out duration-200 hover:text-white'>
                                                        Explore
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* BUNDLE - 2 */}
            <div className='w-full px-4 md:px-6 mt-6 md:mt-8'>
                <div className='bg-linear-to-b from-[#0772DC] to-[#03122100] rounded-2xl md:rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center gap-y-[60px] sm:gap-y-[70px] md:gap-y-[85px] lg:gap-y-[100px] p-4 sm:p-6 md:p-10 lg:p-[72px]'>
                    {
                        bundle2.map((service, index) => (
                            <div className='w-full flex flex-col justify-center items-center' key={index}>
                                <h2 className='text-white font-semibold uppercase text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]'> {service.title} </h2>

                                <p className='font-normal text-white mt-1.5 leading-tight max-w-[750px] w-full text-center text-base sm:text-[17px] md:text-[18px] lg:text-[20px]'> {service.subpara} </p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 gap-10'>
                                    {service.categories.map((category, index) => (
                                        <div className='w-full flex flex-col justify-center items-center text-center gap-y-2' key={index}>
                                            {/* <p className='font-bold text-white text-[18px] sm:text-[20px] md:text-[22.5px] lg:text-[24px] uppercase'> {category.name} </p> */}
                                            <div className='group relative flex flex-row'>
                                                <Image
                                                    src={`${category.imageURL}`}
                                                    alt={`${category.name}`}
                                                    height={1000}
                                                    width={1000}
                                                    className='max-w-[400px] w-full aspect-square object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-200 ease-in-out group-hover:shadow-[8px_8px_16px_#0772DC]'
                                                />
                                                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl pointer-events-none' />
                                                <Link href={`${service.href}`}>
                                                    <Button className='opacity-0 group-hover:opacity-100 px-8 h-12 md:px-10 md:h-14 rounded-full cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0772DC] font-bold bg-[#031221] text-sm md:text-base lg:text-[18px] shadow-[inset_3px_3px_5px_#0772DC,inset_-3px_3px_5px_#0772DC] hover:bg-black transition-all ease-in-out duration-200 hover:text-white'>
                                                        Explore
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* BUNDLE - 3 */}
            <div className='w-full px-4 md:px-6 mt-6 md:mt-8'>
                <div className='bg-linear-to-b from-[#0772DC] to-[#03122100] rounded-2xl md:rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center gap-y-[60px] sm:gap-y-[70px] md:gap-y-[85px] lg:gap-y-[100px] p-4 sm:p-6 md:p-10 lg:p-[72px]'>
                    {
                        bundle3.map((service, index) => (
                            <div className='w-full flex flex-col justify-center items-center' key={index}>
                                <h2 className='text-white font-semibold uppercase text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]'> {service.title} </h2>

                                <p className='font-normal text-white mt-1.5 leading-tight max-w-[750px] w-full text-center text-base sm:text-[17px] md:text-[18px] lg:text-[20px]'> {service.subpara} </p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 gap-10'>
                                    {service.categories.map((category, index) => (
                                        <div className='w-full flex flex-col justify-center items-center text-center gap-y-2' key={index}>
                                            {/* <p className='font-bold text-white text-[18px] sm:text-[20px] md:text-[22.5px] lg:text-[24px] uppercase'> {category.name} </p> */}
                                            <div className='group relative flex flex-row'>
                                                <Image
                                                    src={`${category.imageURL}`}
                                                    alt={`${category.name}`}
                                                    height={1000}
                                                    width={1000}
                                                    className='max-w-[400px] w-full aspect-square object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-200 ease-in-out group-hover:shadow-[8px_8px_16px_#0772DC]'
                                                />
                                                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl pointer-events-none' />
                                                <Link href={`${service.href}`}>
                                                    <Button className='opacity-0 group-hover:opacity-100 px-8 h-12 md:px-10 md:h-14 rounded-full cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0772DC] font-bold bg-[#031221] text-sm md:text-base lg:text-[18px] shadow-[inset_3px_3px_5px_#0772DC,inset_-3px_3px_5px_#0772DC] hover:bg-black transition-all ease-in-out duration-200 hover:text-white'>
                                                        Explore
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Page