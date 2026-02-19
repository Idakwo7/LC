import React from "react";

export default function PortfolioHero() {
  return (
    <section className="relative lg:mx-30  mx-6 lg:my-[116px] my-[68.33px]">
      <div className="lg:gap-[64px] gap-[16px]">
        <div>
          <h2 className="md:text-[80px] text-[24px] font-semibold text-[#000000] md:leading-[115px] md:-tracking-[1.5%]">
            Empowering Disruptive <br /> African Startups to <br /> Transform
            Industries.
          </h2>
        </div>
        <div className="lg:ml-[51%] lg:mr-[11.8%] lg:w-[768px] mt-4 lg:mt-0">
          <p className="lg:text-[26.7px] leading-[180%] -tracking-[-0.53px]">
            Live Capital invests in bold, innovative companies that challenge
            the status quo and drive meaningful change across key sectors.{" "}
            <br /> <br />
            Our portfolio represents the best in African entrepreneurship,
            combining groundbreaking ideas with impactful execution.
          </p>
        </div>
      </div>
    </section>
  );
}
