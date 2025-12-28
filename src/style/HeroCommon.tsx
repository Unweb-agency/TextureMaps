import React from "react";
import { WateryReveal } from "./SmoothReveal";
import { Button } from "@/components/ui/button";

type HeroCommonProps = {
  title: string;
  //   para: string;
};

const HeroCommon = ({ title }: HeroCommonProps) => {
  return (
    <section className="relative mt-0 w-full">
      {/* <div className="w-full bg-[#0920371A] backdrop-blur-2xl flex flex-col justify-center items-center text-center pt-[60px] sm:mt-20 md:pt-[100px] px-4 sm:px-6 md:px-8 lg:px-10 pb-12 sm:pb-14 md:pb-16 lg:pb-20 rounded-2xl md:rounded-3xl lg:rounded-4xl"> */}
      <div className="w-full backdrop-blur-2xl flex flex-col justify-center items-center text-center pt-[60px] sm:mt-10 md:pt-[50px] px-4 sm:px-6 md:px-8 lg:px-10 rounded-2xl md:rounded-3xl lg:rounded-4xl">
        <WateryReveal>
          {/* <div className="mt-[60px] text-center bg-linear-to-b from-[#031221] to-[#0772DC] rounded-full">
            <h1 className="font-extrabold bg-linear-to-b from-[#FFFFFF] to-[#D9D9D9]/15 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-5xl lg:text-5xl leading-tight md:leading-snug">
              {title}
            </h1>
          </div> */}
          <div className="w-full flex justify-center items-center mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px]">
            <div className="p-2 bg-linear-to-r from-[#031221] to-[#0C4A87] rounded-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full group ">
              <Button className="text-center bg-linear-to-b from-[#031221] to-[#0772DC] uppercase w-full h-14 md:h-16 rounded-full group-hover:cursor-pointer text-base sm:text-[17px] md:text-[18px] lg:text-[20px]">
                {title}
              </Button>
            </div>
          </div>
        </WateryReveal>
      </div>
      {/* <WateryReveal>
        <Button className="mt-[60px] text-center bg-linear-to-b from-[#031221] to-[#0772DC] uppercase w-full h-14 md:h-16 rounded-full group-hover:cursor-pointer text-base sm:text-[17px] md:text-[18px] lg:text-[20px]">
          {title}
        </Button>
      </WateryReveal> */}
    </section>
  );
};

export default HeroCommon;
