import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="pt-12 sm:pt-20 lg:pt-[54px]">
      {/* Heading */}
      <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[40px] sm:leading-[56px] md:leading-[80px] lg:leading-[115px] -tracking-[0.5px] md:-tracking-[1%] font-semibold px-4 sm:px-6 lg:px-[30px] text-left md:mx-[120px]">
        Join us
      </h1>

      {/* Hero Image */}
      <div className="w-full relative h-[300px] sm:h-[500px] md:h-[650px] lg:h-[872px] mt-6 lg:mt-10">
        <Image
          src="/images/join-us/illos.svg"
          alt="hero"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Paragraph Section */}
      <div className="px-6 sm:px-6 lg:ml-[41%] lg:mr-[11.8%] lg:w-[905px] border-t border-gray-300 pt-8 sm:pt-12 md:pt-16 lg:pt-16 mt-8 lg:mt-40 leading-[160%]">
        <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] leading-[160%] sm:leading-[170%] md:leading-[180%] lg:leading-[190%]  sm:-tracking-[0.3px] md:-tracking-[0.4px] lg:-tracking-[0.53px] mt-4 lg:mt-6 mb-6 md:mb-[80px] lg:mb-[106.5px] text-left">
          At Live Capital, we’re shaping the future of work by fostering bold
          ideas, nurturing innovation, and building a culture of collaboration
          and resilience. Whether you’re looking to be part of our dynamic team
          or seeking opportunities with one of our portfolio companies, we’re
          excited to help you take the next step in your career.
        </p>
      </div>
    </main>
  );
}
