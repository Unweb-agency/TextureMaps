import Container from '@/style/Container'
import HeroCommon from '@/style/HeroCommon'
import Image from 'next/image'
import modelWithOutfit from "../../../public/about-us/outfit_model.png"
import title_textureMap from "../../../public/about-us/texturemap_title.png"
import React from 'react'
import MeetOurFounderCard from '@/components/about-us/founder-card'
import SocialBar from '@/components/common/SocialBar'

const page = () => {
  return (
    <main className='relative'>
      <div className='px-4 md:px-6 mt-10 sm:mt-5 translate-y-0 md:-mt-24 z-10'>
        <HeroCommon title='Our Story' para='What began as one person&apos;s passion to merge creativity with innovation has grown into a brand that&apos;s redefining how the world sees and builds fashion — smarter, faster, and more sustainable.' />
      </div>

      <Container>
        <div className='flex flex-col md:flex-row justify-center items-center text-center mt-10 gap-y-8'>
          <Image
            src={modelWithOutfit}
            alt='model'
            width={1000}
            height={1000}
            className='max-w-[650px] w-full object-cover'
          />

          <div className='max-w-[800px] w-full flex flex-col justify-start items-start text-justify text-base'>
            <p className='text-white font-medium leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px]'>
              Fashion industry across globe is changing faster than ever. Keeping pace with the changes & development, it is necessity for apparel brands to use 3D+AI technology in their workflow , improving process efficiencies and drive sustainability.
            </p>
            <Image src={title_textureMap} alt='branding' height={1000} width={1000} className='object-cover w-full h-auto mt-5 sm:mt-6 md:mt-8 lg:mt-10' />
            <p className='text-white font-medium leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px] mt-2.5'>
              We are market leaders in developing digital solutions for the apparel retail industry. Our unique experience with world class apparel brands and extensive knowledge start from Design development, Print/graphic development, Techpack creation, 3D apparel creation, Ecommerce Images, Physical & virtual garment fittings & High end animations  help our clients save valuable time, money and resources in their communications, sales and production processes providing them with the means to elevate their overall abilities to showcase, present and sell their collections in-store and to wholesalers.
            </p>
          </div>
        </div>
      </Container>

      <MeetOurFounderCard />

      <div className='px-4 md:px-6 my-[70px] sm:my-20 md:my-[90px] lg:my-[100px]'>
        <SocialBar />
      </div>
    </main>
  )
}

export default page