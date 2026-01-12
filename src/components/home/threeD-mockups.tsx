"use client";

import Container from "@/style/Container";

const ThreeDMockups = () => {
  return (
    <Container>
      <section className="relative w-full flex flex-col justify-center items-center text-center mt-10 bg-linear-to-b from-[#092037] to-[#17589B] rounded-2xl md:rounded-3xl lg:rounded-4xl px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8 lg:pb-10 pt-6 shadow-[-4px_-4px_0_0_#02100E]">
        <h3 className="uppercase text-[#0772DC] font-bold text-[17px] md:text-[18px] lg:text-[20px]">
          {" "}
          3d mockups & high-end animations{" "}
        </h3>

        <p className="text-[#D9D9D9] font-bold leading-normal text-sm md:text-base lg:text-[18px] mt-3">
          Bring your pieces to life before production — cutting costs and time,
          paired with next-level visual storytelling for campaigns, lookbooks,
          and digital experiences.
        </p>

      </section>
    </Container>
  );
};

export default ThreeDMockups;
