'use client'
import React, { useState, useEffect } from 'react' 
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/style/Container'
import Image from 'next/image'
import { PencilLine } from 'lucide-react'
import { usePathname } from 'next/navigation' 
import { service_data } from '../../../../jsons/service-data'

// const filterOptions = ["kids", "men", "women"]

const dropdownOptions = [
    "Fashion Design",
    "Prints",
    "Graphics",
    "Techpack Creation",
    "E-commerce Imagery",
    "Virtual/Physical Fitting"
]

const Page = () => {
    // const [activeFilter, setActiveFilter] = useState("men")
    const pathname = usePathname() 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    
    const [selectedCategory, setSelectedCategory] = useState(dropdownOptions[0])

    useEffect(() => {
        if (!pathname) return;

        if (pathname.includes("fashion-design")) {
            setSelectedCategory("Fashion Design")
        } else if (pathname.includes("prints")) {
            setSelectedCategory("Prints")
        } else if (pathname.includes("graphics")) {
            setSelectedCategory("Graphics")
        } else if (pathname.includes("techpack-creation")) {
            setSelectedCategory("Techpack Creation")
        } else if (pathname.includes("ecom-imagery")) {
            setSelectedCategory("E-commerce Imagery")
        } else if (pathname.includes("virtual-physical-fitting")) {
            setSelectedCategory("Virtual/Physical Fitting")
        }
    }, [pathname])

    const currentServiceData = service_data.find((item) => 
        item.service_name === selectedCategory || 
        (selectedCategory === "Techpack Creation" && item.service_name === "Techpack Creations")
    );

    const displayImages = currentServiceData ? currentServiceData.serviceImages : [];

    return (
        <main className='relative mt-0 md:mt-16 px-4 md:px-6 pb-20'>
            <div className='relative w-full flex flex-col z-50'>
                <div className='absolute right-0 md:right-4 top-0 flex flex-col items-end'>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`flex items-center justify-center p-3.5 rounded-full border transition-all duration-300 ${isDropdownOpen ? 'bg-[#0772DC] border-[#0772DC] text-white shadow-[0_0_15px_#0772DC]' : 'bg-black/10 border-white/10 text-white hover:bg-white/5'} cursor-pointer`}
                    >
                        <PencilLine className='h-3 sm:h-3.5 md:h-4 w-auto' />
                    </button>
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className='mt-3 w-64 origin-top-right rounded-xl bg-[#031221]/90 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden ring-1 ring-black/5'
                            >
                                <div className='flex flex-col p-1.5'>
                                    {dropdownOptions.map((option, index) => (
                                        <button
                                            key={index}
                                            className='group flex w-full items-center rounded-lg px-3 py-2.5 text-sm text-gray-200 hover:bg-[#0772DC] hover:text-white transition-colors duration-200 text-left cursor-pointer'
                                            onClick={() => {
                                                setSelectedCategory(option)
                                                console.log(`${option} selected`)
                                                setIsDropdownOpen(false)
                                            }}
                                        >
                                            <span className='font-medium'>{option}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Filter */}
            {/* <div className='w-full flex justify-center items-center mt-14'>
                <div className='flex flex-row justify-center items-center text-center max-w-[700px] w-full bg-black/40 rounded-full'>
                    {
                        filterOptions.map((option, index) => (
                            <p
                                onClick={() => setActiveFilter(option)}
                                className='relative text-white font-bold p-4 rounded-full w-full cursor-pointer text-xs sm:text-sm md:text-[15px] capitalize'
                                key={index}
                            >
                                {activeFilter === option && (
                                    <motion.span
                                        layoutId="watery-slider"
                                        className='absolute inset-0 bg-linear-to-tl from-[#0772DC] to-[#031221] scale-115 rounded-full'
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className='relative z-10'>
                                    {option}
                                </span>
                            </p>
                        ))
                    }
                </div>
            </div> */}

            <p className='text-white italic font-semibold text-xl md:text-2xl lg:text-3xl mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8'>
                {selectedCategory}
            </p>

            <Container>
                {displayImages.length > 0 ? (
                    <section className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {displayImages.map((imgSrc, index) => (
                            <div key={index} className='group relative rounded-2xl overflow-hidden bg-[#031221]/40 backdrop-blur-lg border border-white/15 transition-all duration-300 hover:border-white/35'>
                                <div className='relative w-full aspect-3/4 overflow-hidden'>
                                    <Image
                                        src={imgSrc}
                                        alt="Product Image"
                                        width={800}
                                        height={1000}
                                        className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105'
                                    />
                                </div>
                                {/* <div className='absolute bottom-4 right-4 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10'>
                                    <p className='text-white font-bold text-sm tracking-wide'>
                                        {product.price}
                                    </p>
                                </div> */}
                            </div>
                        ))}
                    </section>
                ) : (
                    <div className='w-full flex justify-center items-center py-20'>
                        <p className='text-white/60 text-lg md:text-xl font-medium'>
                            No results found.
                        </p>
                    </div>
                )}
            </Container>
        </main>
    )
}

export default Page