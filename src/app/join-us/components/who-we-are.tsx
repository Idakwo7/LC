import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-[#FFFDF7]">
      {/* Intro Text */}
      <div className="md:ml-30 lg:pt-20 pt-10 mx-6">
        <h1 className="bg-[#E2F99C] text-[20px] md:text-[32px] lg:text-[44px] font-semibold italic leading-[20px] lg:leading-[44px] tracking-[-1.33px] rounded-[4px] lg:rounded-[8px] w-fit pr-[6.209px] pb-[4.044px] pl-[5.997px] lg:py-[4px] lg:px-[12px] font-cormorant text-[#0C5752]">
          Who we are
        </h1>
        <p className="leading-[190%] text-[16px] md:text-[26.7px] lg:mt-10 mt-8 lg:w-[905px]">
          Live Capital is a venture capital firm dedicated to empowering
          businesses that challenge the norm and drive meaningful change. At our
          core, we value creativity, passion, and the relentless pursuit of
          excellence. Working here means being part of a community that thrives
          on collaboration, innovation, and the shared goal of creating
          impactful results.
        </p>
        <h3 className="text-[16px] md:text-[26.7px] leading-[190%] font-medium tracking-[-0.53px] lg:mt-6 mt-3">
          Our values define the way we work:
        </h3>
      </div>

      {/* Floating Divs */}
      <div className="relative max-w-[1440px] lg:mx-auto mx-6 lg:h-[900px] h-[250px] lg:mt-40 mt-10">
        {/* Community */}
        <div
          className="
            absolute
            top-[10.1px] lef
            t-0 sm:top-[38.03px] sm:left-[46px]
            w-[184.84px] sm:w-[696px] max-w-full
            p-4 sm:p-6 lg:p-8
            rounded-[3.19px] sm:rounded-[10px] lg:rounded-[12px]
          "
          style={{
            transform: "rotate(-5deg)",
            backgroundColor: "#FCF6EA",
            zIndex: "auto",
          }}
        >
          <h1 className="text-[7.44px] sm:text-[22px] lg:text-[28px] font-bold leading-[140%] tracking-[-0.53px]">
            Community
          </h1>
          <p className="text-[7.09px] sm:text-[18px] lg:text-[26.7px] leading-[150%] tracking-[-0.53px] pt-2 lg:pt-3">
            We believe in the power of connections, fostering an environment
            where every voice matters.
          </p>
        </div>

        {/* Resilience */}
        <div
          className="
            absolute
            top-0 left-[189.89px] sm:top-[0px] sm:left-[761px]
            w-[160.26px] sm:w-[603.44px] max-w-full
            p-4 sm:p-6 lg:p-8
            rounded-[3.19px] sm:rounded-[10px] lg:rounded-[12px]
          "
          style={{
            transform: "rotate(8deg)",
            backgroundColor: "#E9EFFF",
            zIndex: "auto",
          }}
        >
          <h1 className="text-[7.44px] sm:text-[22px] lg:text-[28px] font-bold leading-[140%] tracking-[-0.53px]">
            Resilience
          </h1>
          <p className="text-[7.09px] sm:text-[18px] lg:text-[26.7px] leading-[150%] tracking-[-0.53px] pt-2 lg:pt-3">
            Challenges fuel our growth. We celebrate adaptability and
            perseverance.
          </p>
        </div>

        {/* Ambition */}
        <div
          className="
            absolute
            top-[58.75px] left-[91.92px] sm:top-[221.22px] sm:left-[346.1px]
            w-[178.47px] sm:w-[672px] max-w-full
            p-4 sm:p-6 lg:p-8
            rounded-[3.19px] sm:rounded-[10px] lg:rounded-[12px]
            z-10
          "
          style={{
            transform: "rotate(-2.54deg)",
            backgroundColor: "#FFE9F4",
          }}
        >
          <h1 className="text-[7.44px] sm:text-[22px] lg:text-[28px] font-bold leading-[140%] tracking-[-0.53px]">
            Ambition
          </h1>
          <p className="text-[7.09px] sm:text-[18px] lg:text-[26.7px] leading-[150%] tracking-[-0.53px] pt-2 lg:pt-3">
            Big dreams drive our vision. We support bold thinkers who aim high.
          </p>
        </div>

        {/* Zeal */}
        <div
          className="
            absolute
            top-[104.08px] left-[7.83px] sm:top-[391.92px] sm:left-[29.47px]
            w-[184.84px] sm:w-[696px] max-w-full
            p-4 sm:p-6 lg:p-8
            rounded-[3.19px] sm:rounded-[10px] lg:rounded-[12px]
          "
          style={{
            transform: "rotate(3deg)",
            backgroundColor: "#DAEEF7",
            zIndex: "auto",
          }}
        >
          <h1 className="text-[7.44px] sm:text-[22px] lg:text-[28px] font-bold leading-[140%] tracking-[-0.53px]">
            Zeal
          </h1>
          <p className="text-[7.09px] sm:text-[18px] lg:text-[26.7px] leading-[150%] tracking-[-0.53px] pt-2 lg:pt-3">
            Passion powers our work. We're committed to building with energy and
            enthusiasm.
          </p>
        </div>

        {/* Yield */}
        <div
          className="
            absolute
            top-[119.27px] left-[175.8px] sm:top-[449.08px] sm:left-[661.95px]
            w-[178.47px] sm:w-[672px] max-w-full
            p-4 sm:p-6 lg:p-8
            rounded-[3.19px] sm:rounded-[10px] lg:rounded-[12px]
          "
          style={{
            transform: "rotate(-5deg)",
            backgroundColor: "#DAF1EE",
            zIndex: "auto",
          }}
        >
          <h1 className="text-[7.44px] sm:text-[22px] lg:text-[28px] font-bold leading-[140%] tracking-[-0.53px]">
            Yield
          </h1>
          <p className="text-[7.09px] sm:text-[18px] lg:text-[26.7px] leading-[150%] tracking-[-0.53px] pt-2 lg:pt-3">
            Results matter. We're focused on creating real, measurable impact.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="md:pb-40 pb-20">
        <p className="font-cormorant italic text-[25.45px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] text-center tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px] lg:tracking-[-3.5px] xl:tracking-[-3.97px] text-[#0C4642] leading-tight">
          If these values resonate with you, we’d love <br /> to hear from you.{" "}
          <span className="underline hover:opacity-80 transition-opacity">
            Get in touch!
          </span>
        </p>
      </div>
    </section>
  );
}
