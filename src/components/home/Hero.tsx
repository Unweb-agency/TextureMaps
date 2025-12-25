"use client";
// import { CldVideoPlayer } from "next-cloudinary";
import Container from "@/style/Container";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import Link from "next/link";

const CldVideoPlayer = dynamic(
  () => import("next-cloudinary").then((mod) => mod.CldVideoPlayer),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-video bg-gray-900 animate-pulse rounded-3xl" />
    ),
  }
);

const Hero = () => {
  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-20 lg:mt-24">
      <Container>
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-b from-[#0772DC] to-[#092037] bg-clip-text text-transparent leading-tight">
            Ecosystem to Launch apparel brand or scale existing process
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3.5 md:mt-4">
            “Creativity is our food and sleep”
          </h2>

          <div className="relative w-[1400px] max-w-full mt-8 md:mt-12 rounded-3xl overflow-hidden aspect-video">
            <video
              src="https://res.cloudinary.com/dy5z7hpqu/video/upload/v1766685104/Golf-Sportswear-category-Animation_bw2uqs.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="w-full flex justify-center items-center mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px]">
            <div className="p-2 bg-linear-to-r from-[#031221] to-[#0C4A87] rounded-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full group ">
              <Link href={"/contact"}>
                <Button className="text-center bg-linear-to-b from-[#031221] to-[#0772DC] uppercase w-full h-14 md:h-16 rounded-full group-hover:cursor-pointer text-base sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
