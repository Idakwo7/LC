"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const brand = [
  {
    logo: "/images/invest/outside.svg",
    description:
      "Outside is a mobile app and platform that helps urban professionals discover and book verified entertainment experiences. ",
    width: 225.78,
    mobileWidth: 96.76,
  },
  {
    logo: "/images/invest/drivewell.svg",
    description:
      "DriveWell simplifies car ownership in Nigerian cities through certified vehicle sales, trusted maintenance services, and flexible payment options.",
    width: 197.3,
    mobileWidth: 108.5,
  },
  {
    logo: "/images/invest/cast.svg",
    description:
      "DriveWell simplifies car ownership in Nigerian cities through certified vehicle sales, trusted maintenance services, and flexible payment options.",
    width: 175,
    mobileWidth: 75,
  },
  {
    logo: "/images/invest/plan-party.svg",
    description:
      "Plan A Party is an all-in-one event planning platform that takes the stress out of organizing celebrations. ",
    width: 88.82,
    mobileWidth: 38.06,
  },
];

function OverlappingCards() {
  return (
    <div className="flex flex-col items-center lg:gap-8 gap-5 md:py-20 pt-15">
      {brand.map((item, index) => (
        <div
          key={index}
          className="relative lg:w-[560px] lg:h-[640px] w-[240px] h-[274px] bg-[#0C4642] border-[4px] border-[#F4F5EB] lg:rounded-[32px] rounded-[13.71px] overflow-hidden"
        >
          <Image
            src="/images/invest/nails-1.svg"
            alt="nails1"
            width={319}
            height={322}
            className="absolute top-0 lg:left-[241px] left-[105px] w-[125px] md:w-auto "
          />
          <div
            className="absolute top-[90px] left-[27.43px] lg:top-[245px] lg:left-[64px] w-[var(--mobile-width)] md:w-auto"
            style={
              {
                "--mobile-width": `${item.mobileWidth}px`,
              } as React.CSSProperties
            }
          >
            <Image
              src={item.logo}
              alt="brand-logo"
              width={item.width}
              height={422}
              className=""
            />
          </div>
          <Image
            src="/images/invest/nails.svg"
            alt="nails"
            width={319}
            height={422}
            className="absolute bottom-0 lg:left-[241px] left-[105px] w-[125px] md:w-auto"
          />
          <p className="absolute md:top-[325px] md:left-[64px] top-[120px] left-[27.43px] text-[#FFFFFF] text-[6.86px] md:text-[16px] md:pr-24 pr-[58.29px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function WhoWeInvestIn() {
  return (
    <section className="relative mt-[42.77px] lg:mt-[120px]">
      <div className="relative md:px-30 px-5 flex flex-col items-center md:w-[746px] mx-auto">
        <Image
          src="/images/invest/semi-circle.svg"
          alt="semi-circle"
          width={74}
          height={95}
          className="absolute -top-[30px] md:-top-[90px] left-[38.53px] md:left-0 w-[24.85px] md:w-auto"
        />
        <Image
          src="/images/invest/star.svg"
          alt="star"
          width={74}
          height={95}
          className="absolute md:top-[22.45px] top-[22.45px] md:right-0 right-[100.67px] z-10 w-[26.7px] md:w-auto"
        />
        <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[115px] md:-tracking-[1.5%]">
          Who we
        </h2>

        <div className="relative -top-4 bg-[#F4F5EB] md:gap-[8px] shrink-0 inline-flex items-center justify-center md:pt-[70px] md:pb-[100px] pb-[14px] md:pr-[170px] md:pl-[170px] px-[22px] md:pr-[24px]  lg:h-[136px] !rounded-[8px]">
          <h2
            className="md:text-[146.7px] text-[52px] text-[#0C4642] -tracking-[1.33px] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit leading-[40px] md:leading-[117px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Invest in
          </h2>
        </div>

        <p className="md:mt-16 leading-[160%] md:text-[28px] text-[16px] lg:w-[794px] font-medium ">
          We actively seek out startups that challenge the status quo, disrupt
          traditional industries, and push the boundaries of innovation.
          Focusing on:
        </p>
      </div>
      {/* Floating Divs */}

      <div className="relative mx-3 lg:mx-auto max-w-[1440px] lg:h-[600px] h-[150px]">
        {/* Hospitality - top: 30.56px, left: 0 */}
        <div className="absolute lg:top-[123.76px] lg:left-[65.66px] top-[30.56px] left-0">
          <div className="flex flex-col items-center justify-center lg:w-[575px] w-[157.2px] lg:h-[160px] h-[43.74px] bg-[#FCF6EA] lg:rounded-[16px] rounded-[8px] -rotate-[5deg]">
            <h2 className="lg:text-[40px] text-[12px] font-bold text-center leading-[140%] text-[#0C4642]">
              Hospitality
            </h2>
          </div>
        </div>

        {/* Real Estate - top: 20.07px, left: 42.4px */}
        <div className="absolute lg:top-[12px] lg:left-[698px] top-[0] left-[172.88px]">
          <div className="flex flex-col items-center justify-center lg:w-[575px] w-[157.2px] lg:h-[160px] h-[43.74px] bg-[#E9EFFF] lg:rounded-[16px] rounded-[8px] -rotate-[5deg]">
            <h2 className="lg:text-[40px] text-[12px] font-bold text-center leading-[140%] text-[#0C4642]">
              Real Estate
            </h2>
          </div>
        </div>

        {/* Healthcare - top: 50.98px, left: 119.69px */}
        <div className="absolute lg:top-[198.48px] lg:left-[503.46px] top-[50.98px] left-[119.69px]">
          <div className="flex flex-col items-center justify-center lg:w-[575px] w-[157.2px] lg:h-[160px] h-[43.74px] bg-[#FFE9F4] lg:rounded-[16px] rounded-[8px] rotate-[5deg]">
            <h2 className="lg:text-[40px] text-[12px] font-bold text-center leading-[140%] text-[#0C4642]">
              Healthcare
            </h2>
          </div>
        </div>

        {/* Manufacturing - top: 95.96px, left: 38.09px */}
        <div className="absolute lg:top-[363px] lg:left-[205px] top-[95.96px] left-[38.09px]">
          <div className="flex flex-col items-center justify-center lg:w-[575px] w-[157.2px] lg:h-[160px] h-[43.74px] bg-[#DAEEF7] lg:rounded-[16px] rounded-[8px] rotate-[0deg]">
            <h2 className="lg:text-[40px] text-[12px] font-bold text-center leading-[140%] text-[#0C4642]">
              Manufacturing
            </h2>
          </div>
        </div>

        {/* Technology - top: 108.54px, left: 208.05px */}
        <div className="absolute lg:top-[408.99px] lg:left-[826.65px] top-[108.54px] left-[208.05px]">
          <div className="flex flex-col items-center justify-center lg:w-[575px] w-[157.2px] lg:h-[160px] h-[43.74px] bg-[#DAF1EE] lg:rounded-[16px] rounded-[8px] -rotate-[1deg]">
            <h2 className="lg:text-[40px] text-[12px] font-bold text-center leading-[140%] text-[#0C4642]">
              Technology
            </h2>
          </div>
        </div>

        {/* Art & Entertainment - top: 141.48px, left: 55.47px */}
        <div className="absolute lg:top-[529.49px] lg:left-[268.54px] top-[141.48px] left-[55.47px]">
          <div className="flex flex-col items-center justify-center lg:w-[575px] w-[157.2px] lg:h-[160px] h-[43.74px] bg-[#F7E1D7] lg:rounded-[16px] rounded-[8px] -rotate-[2.71deg]">
            <h2 className="lg:text-[40px] text-[12px] font-bold text-center leading-[140%] text-[#0C4642]">
              Art & Entertainment
            </h2>
          </div>
        </div>
      </div>

      {/* Static Cards Section */}
      <div className="lg:mt-[106.49px]">
        <OverlappingCards />
      </div>

      <div className="flex flex-col items-center justify-center lg:mb-[176px] md:mt-20">
        <h2 className="font-cormorant italic text-[#0C4642] text-[44px] -tracking-[1.49px] mt-16 font-medium md:hidden">
          and lots more...{" "}
        </h2>
        <button className="px-[40px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-10 z-30 text-[18px] font-bold">
          See Portfolio page
        </button>
      </div>
    </section>
  );
}
