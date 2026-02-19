import Image from "next/image";
export default function WhyJoinUs() {
  return (
    <section className=" relative h-auto">
      <div className="grid grid-cols-2 gap-2 md:gap-10 max-w-[1440px] mx-auto md:h-[130vh] h-[401px] ">
        {/* 1st item (first column) */}
        <div
          className="rounded-[6.5px] md:rounded-[24px] grid place-items-center translate-y-[98.58px] md:translate-y-[364px] !bg-cover bg-center overflow-hidden px-[26px] md:px-[64px] lg:px-[100px] h-[234.68px] md:h-[867px]"
          style={{
            backgroundImage: `url("/images/venture-capital/group.svg")`,
            backgroundColor: "#0C5752",
          }}
        >
          <div className="bg-[#F4F5EB] pb-[10.83px] md:pb-[40px] md:rounded-[8px] rounded-[2.17px]">
            <div className="relative md:mt-6 md:ml-6 md:w-[40px] md:h-[40px] mt-[6px] ml-[6.5px] w-[10.83px] h-[10.83px]">
              <Image
                src="/images/venture-capital/Subtract.svg"
                alt="star"
                fill
              />
            </div>
            <h2 className="md:px-6 px-[6.5px] md:pt-4 pt-[4.333px] text-[7.04px] md:text-[24px] font-bold text-[#0C4642]">
              Tailored Investment Solutions
            </h2>
            <p className="md:pt-3 md:px-6 px-[6.5px] text-[5.42px] md:text-[20px]">
              We provide a strategic blend of equity and debt financing to match
              your business needs.
            </p>
          </div>
        </div>

        {/* 2nd item (second column) */}
        <div
          className="rounded-[6.5px] md:rounded-[24px] grid place-items-center !bg-cover bg-center overflow-hidden px-[26px] md:px-[64px] lg:px-[100px] h-[234.68px] md:h-[867px]"
          style={{
            backgroundImage: `url("/images/venture-capital/bg.svg")`,
            backgroundColor: "#0C5752",
          }}
        >
          <div className="bg-[#F4F5EB] pb-[10.83px] md:pb-[40px] md:rounded-[8px] rounded-[2.17px]">
            <div className="relative md:mt-6 md:ml-6 md:w-[40px] md:h-[40px] mt-[6px] ml-[6.5px] w-[10.83px] h-[10.83px]">
              <Image
                src="/images/venture-capital/Subtract.svg"
                alt="star"
                fill
              />
            </div>
            <h2 className="md:px-6 px-[6.5px] md:pt-4 pt-[4.333px] text-[7.04px] md:text-[24px] font-bold text-[#0C4642]">
              Tailored Investment Solutions
            </h2>
            <p className="md:pt-3 md:px-6 px-[6.5px] text-[5.42px] md:text-[20px]">
              We provide a strategic blend of equity and debt financing to match
              your business needs.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute lg:-right-20 lg:top-200 -right-10 top-90 lg:w-[1174.03px] lg:h-[1062.57px] w-[242.6px] h-[219.57px]">
            <Image
              src="/images/join-us/arrow1.svg"
              alt="arrow"
              fill
              className="object-right"
            />
          </div>
        </div>
      </div>
      <div className="pt-5 md:pt-30 md:px-30 px-5 max-w-[1440px]">
        <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[115px] leading-[60px] -tracking-[1.5%]">
          Why
        </h2>

        <div className="relative -top-4 bg-[#E2F99C] gap-[8px] shrink-0 inline-flex items-center justify-center py-2 md:pt-[70px] md:pb-[100px] px-[8px] md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] lg:h-[136px] rounded-[4px] md:!rounded-[8px]">
          <h2
            className=" text-[52px] md:text-[120px] text-[#0C4642] -tracking-[1.33px] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit leading-[52px] md:leading-[117px]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            join us?
          </h2>
        </div>
      </div>
      <div className="lg:mt-20 mt-5 lg:pl-[51%] lg:pr-[11%] flex flex-col gap-y-10 lg:gap-y-30 order-2 lg:order-1 px-6">
        <div className="border-t-[1px]">
          <h2 className="text-[24px] md:text-[36px] font-bold mb-4 md:mb-6 mt-8 lg:mt-16 text-[#0C4642]">
            Growth Opportunities{" "}
          </h2>
          <p className="mt-4 md:mt-6 text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed">
            Work on projects that challenge and inspire you, with opportunities
            for personal and professional development.{" "}
          </p>
        </div>
        <div className="border-t-[1px]">
          <h2 className="text-[24px] md:text-[36px] font-bold mb-4 md:mb-6 mt-8 lg:mt-16 text-[#0C4642]">
            Dynamic Community{" "}
          </h2>
          <p className="mt-4 md:mt-6 text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed">
            Collaborate with forward-thinking innovators across industries.
          </p>
        </div>
        <div className="border-t-[1px]">
          <h2 className="text-[24px] md:text-[36px] font-bold mb-4 md:mb-6 mt-8 lg:mt-16 text-[#0C4642]">
            Impact-Driven Culture{" "}
          </h2>
          <p className="mt-4 md:mt-6 text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed">
            Be part of a team that’s passionate about making a difference in
            Nigeria and beyond.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
