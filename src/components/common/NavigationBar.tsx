"use client"

import Container from '@/style/Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PanelsTopLeft, Minimize2 } from 'lucide-react'
import React, { useState } from 'react'

const navigationButtons = [
    { buttonName: "Home", href: "/" },
    // { buttonName: "Services", href: "#services" },
    { buttonName: "About Us", href: "/about-us" },
    { buttonName: "Contact", href: "/contact" },
    { buttonName: "Book Call", href: "/book-call" },
]

const NavigationBar = () => {
    const pathname = usePathname()

    // Toggle Mobile Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }
    const closeMenu = () => { setIsMenuOpen(false) }

    return (
        <Container>
            <header className='relative w-full flex justify-center items-center pt-[30px]'>

                {/* Desktop Navigation Bar */}
                <nav className='hidden md:flex w-[800px] max-w-full flex-row justify-between items-center bg-[#0772DC33] p-5 rounded-full fixed top-[30px] z-100 backdrop-blur-lg'>

                    {navigationButtons.map((button, index) => {
                        const isActive = pathname === button.href

                        // Special styling for "Book Call"
                        const isBookCall = button.buttonName === "Book Call"

                        const spanClasses = `text-white py-2.5 px-5 rounded-full font-semibold text-xs md:text-sm lg:text-base transition ${isBookCall
                            ? "bg-transparent border border-white hover:bg-[#0772DC33]/90"
                            : isActive
                                ? "bg-[#0772DC80]"
                                : "bg-transparent"}`

                        return (
                            <Link key={index} href={button.href}>
                                <span className={spanClasses.trim()}>
                                    {button.buttonName}
                                </span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Navigation Bar */}
                <nav className='flex md:hidden w-full relative justify-start items-start'>
                    <PanelsTopLeft className='h-6 w-6 text-white cursor-pointer' onClick={toggleMenu} />

                    <section
                        className={`
                        w-full min-h-screen fixed left-0 top-0 z-999 p-6 
                        bg-linear-to-br from-blue-950 to-blue-900 
                        transition-all duration-500 ease-in-out
                        ${isMenuOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}
                    `}
                    >
                        <div
                            className='bg-black/10 inline-block p-1.5 rounded-md text-white backdrop-blur-sm group cursor-pointer border border-white/10'
                            onClick={toggleMenu}
                        >
                            <Minimize2 />
                        </div>

                        <nav className='w-full flex flex-col gap-8 mt-10'>
                            {navigationButtons.map((button, index) => {
                                const isActive = pathname === button.href
                                const isBookCall = button.buttonName === "Book Call"

                                const spanClasses = `text-white py-2.5 px-5 rounded-full font-semibold text-base transition ${isBookCall
                                    ? "bg-transparent border border-white hover:bg-[#0772DC33]/90"
                                    : isActive
                                        ? "bg-[#0772DC80]"
                                        : "bg-transparent"}`

                                return (
                                    <Link
                                        key={index}
                                        href={button.href}
                                        onClick={closeMenu}
                                        className={`transition-all duration-700 delay-100 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                                    >
                                        <span className={spanClasses.trim()}>
                                            {button.buttonName}
                                        </span>
                                    </Link>
                                )
                            })}
                        </nav>
                    </section>
                </nav>
            </header>
        </Container>
    )
}

export default NavigationBar
