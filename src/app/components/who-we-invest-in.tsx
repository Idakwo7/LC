"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const brand = [
  {
    logo: "/images/invest/outside.svg",
    description:
      "Outside is a mobile app and platform that helps urban professionals discover and book verified entertainment experiences. ",
    width: 225.78,
  },
  {
    logo: "/images/invest/drivewell.svg",
    description:
      "DriveWell simplifies car ownership in Nigerian cities through certified vehicle sales, trusted maintenance services, and flexible payment options.",
    width: 197.3,
  },
  {
    logo: "/images/invest/cast.svg",
    description:
      "DriveWell simplifies car ownership in Nigerian cities through certified vehicle sales, trusted maintenance services, and flexible payment options.",
    width: 175,
  },
  {
    logo: "/images/invest/plan-party.svg",
    description:
      "Plan A Party is an all-in-one event planning platform that takes the stress out of organizing celebrations. ",
    width: 88.82,
  },
];

function OverlappingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] flex justify-center">
      <div className="sticky top-[10vh] w-[560px] h-[640px]">
        {brand.map((item, index) => {
          // Each card starts animating when the previous one is halfway done
          const startProgress = index * 0.2;
          const endProgress = startProgress + 0.2;

          const cardProgress = useTransform(
            scrollYProgress,
            [startProgress, endProgress],
            [0, 1]
          );

          // Cards slide up from bottom of viewport (100vh) to their final position
          const y = useTransform(cardProgress, [0, 1], ["100vh", "0vh"]);
          const scale = useTransform(cardProgress, [0, 1], [1, 1]);

          // Higher z-index for later cards so they overlap on top
          const zIndex = index + 1;

          return (
            <motion.div
              key={index}
              style={{
                y,
                scale,
                zIndex,
              }}
              className="absolute inset-0 w-[560px] h-[640px] bg-[#0C4642] border-[4px] border-[#F4F5EB] rounded-[32px] overflow-hidden"
            >
              <Image
                src="/images/invest/nails-1.svg"
                alt="nails1"
                width={319}
                height={322}
                className="absolute top-0 left-[241px]"
              />
              <Image
                src={item.logo}
                alt="brand-logo"
                width={item.width}
                height={422}
                className="absolute top-[245px] left-[64px]"
              />
              <Image
                src="/images/invest/nails.svg"
                alt="nails"
                width={312}
                height={422}
                className="absolute bottom-0 left-[247px]"
              />
              <p className="absolute top-[325px] left-[64px] text-[#FFFFFF] text-[16px] pr-24">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function WhoWeInvestIn() {
  return (
    <section className="">
      <div className="pt-30 md:px-30 px-5 flex flex-col items-center">
        <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[115px] md:-tracking-[1.5%]">
          Who we
        </h2>

        <div className="relative -top-4 bg-[#F4F5EB] md:gap-[8px] shrink-0 inline-flex items-center justify-center md:pt-[70px] md:pb-[100px] wpx-[8px] md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] lg:h-[136px] !rounded-[8px]">
          <h2
            className="md:text-[146.7px] text-[52px] text-[#0C4642] -tracking-[1.33px] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit md:leading-[117px]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Invest in
          </h2>
        </div>

        <p className="md:mt-16 md:text-[28px] text-[16px] md:w-[648px]">
          At Live Capital, we go beyond traditional funding. Our approach is
          designed to support startups holistically, offering:
        </p>
      </div>

      {/* CSS Grid with 2 columns and 3 rows */}
      <div className="grid grid-cols-2 grid-rows-3 gap-8 text-[#0C4642] max-w-6xl mx-auto py-16">
        {/* Row 1 */}
        <div className="flex items-center justify-center w-[575px] box-border bg-[#E9EFFF] py-13 px-[147px] rotate-[8deg]">
          <h2 className="text-[40px] font-bold whitespace-nowrap">
            Real Estate
          </h2>
        </div>

        <div className="flex items-center justify-center w-[575px] box-border bg-[#FCF6EA] py-13 px-[147px] rotate-[8deg]">
          <h2 className="text-[40px] font-bold whitespace-nowrap">
            Hospitality
          </h2>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-center w-[575px] box-border bg-[#FFE9F4] py-13 px-[147px] rotate-[-5deg]">
          <h2 className="text-[40px] font-bold whitespace-nowrap">
            Healthcare
          </h2>
        </div>

        <div className="flex items-center justify-center w-[575px] box-border bg-[#DAEEF7] py-13 px-[147px]">
          <h2 className="text-[40px] font-bold whitespace-nowrap">
            Manufacturing
          </h2>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-center w-[575px] box-border bg-[#DAF1EE] py-13 px-[147px] rotate-[1deg]">
          <h2 className="text-[40px] font-bold whitespace-nowrap">
            Technology
          </h2>
        </div>

        <div
          className="flex items-center justify-center w-[575px] box-border bg-[#F7E1D7] py-13 px-[147px]"
          style={{ transform: "rotate(2.71deg)" }}
        >
          <h2 className="text-[40px] font-bold whitespace-nowrap">
            Art &amp; Entertainment
          </h2>
        </div>
      </div>
      <OverlappingCards />

      <div className="flex justify-center mb-[176px]">
        <button className="px-[40px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-10 z-30 text-[18px]">
          See Portfolio page
        </button>
      </div>
    </section>
  );
}
