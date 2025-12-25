"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/style/Container";
import Image from "next/image";
import { PencilLine } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { service_data } from "../../../jsons/service-data";
import HeroCommon from "@/style/HeroCommon";
import { WateryReveal } from "@/style/SmoothReveal";

// const filterOptions = ["kids", "men", "women"]

const dropdownOptions = [
  "Fashion Design",
  "Prints",
  "Graphics",
  "Techpack Creation",
  "E-commerce Imagery",
  "Virtual/Physical Fitting",
];

const Page = () => {
  // const [activeFilter, setActiveFilter] = useState("men")
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(dropdownOptions[0]);

  useEffect(() => {
    if (!pathname) return;

    if (searchParams.has("fashion-design")) {
      setSelectedCategory("Fashion Design");
    } else if (searchParams.has("prints")) {
      setSelectedCategory("Prints");
    } else if (searchParams.has("graphics")) {
      setSelectedCategory("Graphics");
    } else if (searchParams.has("techpack-creation")) {
      setSelectedCategory("Techpack Creation");
    } else if (searchParams.has("ecom-imagery")) {
      setSelectedCategory("E-commerce Imagery");
    } else if (searchParams.has("virtual-physical-fitting")) {
      setSelectedCategory("Virtual/Physical Fitting");
    }
  }, [pathname]);

  const currentServiceData = service_data.find(
    (item) =>
      item.service_name === selectedCategory ||
      (selectedCategory === "Techpack Creation" &&
        item.service_name === "Techpack Creations")
  );

  const displayImages = currentServiceData
    ? currentServiceData.serviceImages
    : [];

  return (
    <main className="relative px-4 md:px-6 pb-20">
      <div className="mt-10 sm:mt-5 translate-y-0 md:mt-24 z-10">
        <HeroCommon title="Our Services" />
      </div>
      {/* 
      <div className="w-full mt-6 flex flex-col gap-y-1.5 justify-center items-center text-center bg-linear-to-b from-[#043D76] to-[#0772DC] p-4 md:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl backdrop-blur-lg">
        <WateryReveal>
          <h1 className="font-bold text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
            {currentServiceData
              ? currentServiceData.service_name
              : selectedCategory}
          </h1>
          <p className="font-bold text-[#ACACAC] text-sm sm:text-base md:text-[17px] lg:text-[18px]">
            {currentServiceData ? currentServiceData.service_desc : ""}
          </p>
        </WateryReveal>
      </div> */}

      <Container>
        <div className="w-full mt-6 flex flex-col gap-y-1.5 justify-center items-center text-center bg-linear-to-b from-[#043D76] to-[#0772DC] p-4 md:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl backdrop-blur-lg">
          <WateryReveal>
            <h1 className="font-bold text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
              {currentServiceData
                ? currentServiceData.service_name
                : selectedCategory}
            </h1>
            <p className="font-bold text-[#ACACAC] text-sm sm:text-base md:text-[17px] lg:text-[18px]">
              {currentServiceData ? currentServiceData.service_desc : ""}
            </p>
          </WateryReveal>
        </div>
      </Container>

      <div className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
        <div className="absolute right-0 md:right-4 top-0 flex flex-col items-end">
          {/* Service Category Filter */}
          <div className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
            <div className="absolute right-0 md:right-4 top-0 flex flex-col items-end">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-center p-3.5 rounded-full border transition-all duration-300 ${isDropdownOpen ? "bg-[#0772DC] border-[#0772DC] text-white shadow-[0_0_15px_#0772DC]" : "bg-black/80 border-white/20 text-white hover:bg-white/5"} cursor-pointer shadow-[1px_1px_16px_#0772dc]`}
              >
                <PencilLine className="h-3 sm:h-3.5 md:h-4 w-auto" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 w-64 origin-top-right rounded-xl bg-[#031221]/90 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden ring-1 ring-black/5"
                  >
                    <div className="flex flex-col p-1.5">
                      {dropdownOptions.map((option, index) => (
                        <button
                          key={index}
                          className="group flex w-full items-center rounded-lg px-3 py-2.5 text-sm text-gray-200 hover:bg-[#0772DC] hover:text-white transition-colors duration-200 text-left cursor-pointer"
                          onClick={() => {
                            setSelectedCategory(option);
                            console.log(`${option} selected`);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span className="font-medium">{option}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Filter */}
      {/* <div className='w-full flex justify-center items-center mt-14'>
                <div className='flex flex-row justify-center items-center text-center max-w-[700px] w-full bg-black/40 rounded-full'>
                    {
                        filterOptions.map((option, index) => (
                            <p
                                onClick={() => setActiveFilter(option)}
                                className='relative text-white font-bold p-4 rounded-full w-full cursor-pointer text-xs sm:text-sm md:text-[15px] capitalize'
                                key={index}
                            >
                                {activeFilter === option && (
                                    <motion.span
                                        layoutId="watery-slider"
                                        className='absolute inset-0 bg-linear-to-tl from-[#0772DC] to-[#031221] scale-115 rounded-full'
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className='relative z-10'>
                                    {option}
                                </span>
                            </p>
                        ))
                    }
                </div>
            </div> */}

      {/* <p className='text-white italic font-semibold text-xl md:text-2xl lg:text-3xl mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8'>
                {selectedCategory}
            </p> */}
      <Container>
        {displayImages.length > 0 ? (
          <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:mt-10">
            {displayImages.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-[#031221]/40 backdrop-blur-lg border border-white/15 transition-all duration-300 hover:border-white/35"
              >
                <WateryReveal>
                  <div className="relative w-full aspect-3/4 overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt="Product Image"
                      width={800}
                      height={1000}
                      className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </WateryReveal>
                {/* <div className='absolute bottom-4 right-4 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10'>
                                    <p className='text-white font-bold text-sm tracking-wide'>
                                        {product.price}
                                    </p>
                                </div> */}
              </div>
            ))}
          </section>
        ) : (
          <div className="w-full flex justify-center items-center py-20">
            <p className="text-white/60 text-lg md:text-xl font-medium">
              No results found.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Page;
