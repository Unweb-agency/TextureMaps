import Container from '@/style/Container'
import HeroCommon from '@/style/HeroCommon'
import React from 'react'

const termsAndConditions = [
    "Texturemaps retain ownership of techniques, pre-existing tools, templates, or proprietary working files used to create the deliverables.",
    "Client is responsible for obtaining all necessary licenses for any third-party materials they provide (e.g., stock images, specific fonts, copyrighted designs)",
    "Ownership of final deliverables would be provided upon full and final payment.",
    "Texturemaps is liable for the total fees paid for the service only,not for any other loss.",
    "Payment terms & conditions to be followed as per contract, failing which Texturemaps retains the right to cancel the project.",
]

const Page = () => {
    return (
        <main className='relative pb-10 md:pb-12 lg:pb-16'>
            <div className='px-4 md:px-6 mt-10 sm:mt-5 translate-y-0 md:-mt-24 z-10'>
                <HeroCommon title='Terms & Conditions' para='' />
            </div>

            <Container>
                <section className='w-full bg-radial from-[#0772DC] via-[#0920371A] to-[#02100E66] mt-8 sm:mt-10 md:mt-14 lg:mt-16 rounded-2xl md:rounded-3xl lg:rounded-4xl blur-in-3xl shadow-[1px_1px_20px_#0772DC]'>
                    <div className='flex flex-col justify-center items-center text-start bg-[#09203733] backdrop-blur-2xl p-4 sm:p-6 rounded-2xl md:rounded-3xl lg:rounded-4xl gap-y-6 sm:gap-y-7 md:gap-y-8 lg:gap-y-9'>
                        <ol className='flex flex-col gap-y-6 sm:gap-y-8 w-full'>
                            {termsAndConditions.map((point, index) => (
                                <li 
                                    key={index} 
                                    className='group flex flex-row items-start gap-4 md:gap-6 border-b border-white/5 pb-6 last:border-none last:pb-0'
                                >
                                    <span className='flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0772DC]/20 text-[#0772DC] font-bold text-lg md:text-xl border border-[#0772DC]/50 shadow-[0_0_10px_rgba(7,114,220,0.3)]'>
                                        {index + 1}
                                    </span>

                                    <p className='text-[#D9D9D9] text-base sm:text-lg md:text-[19px] leading-relaxed font-medium mt-1.5'>
                                        {point}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>
            </Container>
        </main>
    )
}

export default Page