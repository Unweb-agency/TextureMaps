import Hero from '@/components/home/Hero'
import OurServices from '@/components/home/our-services'
import ThreeDMockups from '@/components/home/threeD-mockups'
import React from 'react'
import BlockContainer from '@/components/home/block'
import ModelsGroupBanner from '@/components/home/models-group'
import { WateryReveal } from '@/style/SmoothReveal'

const page = () => {
  return (
    <main>
      {/* Hero section */}
      <WateryReveal>
        <Hero />
      </WateryReveal>

      {/* Our services */}
      <OurServices />

      {/* 3-D Moackups section with video */}
      <WateryReveal>
        <ThreeDMockups />
      </WateryReveal>

      {/* About Us */}
      {/* Why Choose Us */}
      {/* A studio that feels like your team */}
      <BlockContainer title='About Us' content='We are market leaders in developing digital solutions for the apparel retail industry. Our unique experience and extensive knowledge in Design, Print/graphic development, Techpack creation, Digital product creation, Ecommerce Images, Physical & virtual garment fittings & High end animations help our clients showcase and sell their collections seamlessly saving valuable time, money and resources in communication, sales and production processes.' classname='mt-[60px] sm:mt-[70px] md:mt-[85px] lg:mt-[100px]' />

      <BlockContainer title='Why choose us?' content='Whether you&apos;re launching your apparel brand or scaling an existing workflow, we&apos;re your creative and strategic partner every step on the way. We help businesses stitch together the right combination of tools, workflows, and creative strategy to meet their goals' classname='mt-[35px] sm:mt-10 md:mt-[45px] lg:mt-[50px]'/>

      <BlockContainer title='A studio that feels like your team' content='We are not an agency. We are collaborators. You&apos;ll work with real humans who understand fashion, move fast and care about your brand like it&apos;s their own. Big or small, your goals become our mission. ' classname='mt-[35px] sm:mt-10 md:mt-[45px] lg:mt-[50px]'/>

      {/* Models group */}
      <ModelsGroupBanner />
    </main>
  )
}

export default page