import React from 'react'
import Image from 'next/image'
import models from "../../../public/images/group_models.png"
import Container from '@/style/Container'
import { WateryReveal } from '@/style/SmoothReveal'

const ModelsGroupBanner = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center mt-[100px] sm:mt-[115px] md:mt-[135px] lg:mt-[150px] px-4 sm:px-6 md:px-8 lg:px-10 gap-[-10px]'>
            <Container>
                <WateryReveal>
                    <Image
                        src={models}
                        alt='models group banner'
                        height={1000}
                        width={1000}
                        className='ml-3 sm:ml-3.5 object-cover w-full h-full'
                    />
                </WateryReveal>
            </Container>

            {/* Glowing Shadown Boxes */}
            <Container>
                <div className='grid grid-cols-3 gap-5 sm:gap-[35px] md:gap-[42px] lg:gap-[60px] mt-[-27%]'>
                    <div className='bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[600px] rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] blur-[20%] translate-y-[50%]'></div>
                    <div className='bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[600px] rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] blur-[20%] translate-y-[35%]'></div>
                    <div className='bg-linear-to-b from-[#0772DC80] to-[#73737300] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[600px] rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-sm shadow-[0_-10px_20px_#0772DC,0_0_10px_#0772DC] blur-[20%] translate-y-[50%]'></div>
                </div>
            </Container>
        </section>
    )
}

export default ModelsGroupBanner