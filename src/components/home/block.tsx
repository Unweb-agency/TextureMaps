import Container from '@/style/Container'
import { WateryReveal } from '@/style/SmoothReveal'
import React from 'react'

type BlockContainerProps = {
    title: string
    content: string
    classname: string
}

const BlockContainer = ({ title, content, classname }: BlockContainerProps) => {
    return (
        <Container>
            <WateryReveal>
                <div className={classname}>
                    <h2 className='bg-linear-to-b from-[#092037] to-[#0772DC] bg-clip-text text-transparent font-extrabold text-3xl md:text-4xl lg:text-5xl'> {title} </h2>
                    <p className='font-bold text-white leading-snug text-sm sm:text-base md:text-[18px] lg:text-[20px] mt-5 sm:mt-6 md:mt-7'>
                        {content}
                    </p>
                </div>
            </WateryReveal>
        </Container>
    )
}

export default BlockContainer