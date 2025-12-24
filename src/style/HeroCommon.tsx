import React from "react";
import { WateryReveal } from "./SmoothReveal";

type HeroCommonProps = {
  title: string;
  //   para: string;
};

const HeroCommon = ({ title }: HeroCommonProps) => {
  return (
    <section className="w-full bg-linear-to-tr from-[#0772DC] via-[#031221] to-[#0772DC]/30 rounded-2xl md:rounded-3xl lg:rounded-4xl blur-in-xl">
      <div className="w-full bg-[#0920371A] backdrop-blur-2xl flex flex-col justify-center items-center text-center pt-[60px] sm:mt-20 md:pt-[100px] lg:pt-[150px] px-4 sm:px-6 md:px-8 lg:px-10 pb-12 sm:pb-14 md:pb-16 lg:pb-20 rounded-2xl md:rounded-3xl lg:rounded-4xl">
        <WateryReveal>
          <h1 className="font-extrabold bg-linear-to-b from-[#FFFFFF] to-[#D9D9D9]/15 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-[100px] leading-tight md:leading-snug">
            {title}
          </h1>
          {/* 
                    <p className='font-normal text-[#D9D9D9CC] text-sm sm:text-base md:text-[18px] lg:text-[20px] max-w-[1145px] w-full mt-5 sm:mt-3 md:mt-4 lg:mt-5'>
                        {para}
                    </p> */}
        </WateryReveal>
      </div>
    </section>
  );
};

export default HeroCommon;
