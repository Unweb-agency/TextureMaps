"use client";

import Container from "@/style/Container";
import Link from "next/link";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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

        {/* Video Player */}
        {/* <div className="relative w-[1400px] max-w-full mt-12 md:mt-14 rounded-3xl overflow-hidden aspect-video">
          <CldVideoPlayer
            id="hero-video" // Added unique ID to prevent instance conflicts
            // width="1920" // Use numeric values for the aspect ratio calculation
            // height="1080" // Component will still scale to container due to absolute class
            src="samples/cld-sample-video"
            autoPlay={true} // Use string "always" for robust cross-browser autoplay
            muted={true}
            loop={true}
            controls={false}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div> */}
        {/* <div className="relative w-full max-w-[1400px] aspect-video mt-12 rounded-3xl overflow-hidden">
          <video
            src="https://res.cloudinary.com/dy5z7hpqu/video/upload/v1766685104/Golf-Sportswear-category-Animation_bw2uqs.mp4"
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div> */}
      </section>
    </Container>
  );
};

export default ThreeDMockups;
