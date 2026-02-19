import Image from "next/image";

export default function VentureCapitalism() {
  return (
    <section className="lg:h-[2862px] h-[900px] bg-[#FFFFFF]">
      <div className="pt-10 md:pt-30 md:px-30 px-5">
        <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[110px] leading-[60px] -tracking-[1.5%]">
          Venture Capitalism
        </h2>

        <div className="relative -top-4 bg-[#E2F99C] gap-[8px] shrink-0 inline-flex items-center justify-center py-2 md:pt-[70px] md:pb-[100px] px-[8px] md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] lg:h-[136px] rounded-[4px] md:!rounded-[8px]">
          <h2
            className=" text-[52px] md:text-[146.7px] text-[#0C4642] -tracking-[1.33px] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit leading-[52px] md:leading-[117px]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            with a difference
          </h2>
        </div>
        <Image
          src="/images/home-team/Vector.svg"
          alt="vector"
          width={69}
          height={70}
          className="relative lg:-top-13 lg:left-190 -top-7  left-72 w-[24px] md:w-auto"
        />

        <p className="md:mt-16 mt-6 text-[16px] md:text-[28px] md:w-[648px]">
          At Live Capital, we go beyond traditional funding. Our approach is
          designed to support startups holistically, offering:
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-10 max-w-[1440px] mx-auto ">
        {/* 1st item (first column) */}
        <div
          className="rounded-[6.5px] md:rounded-[24px] grid place-items-center translate-y-[98.58px] md:translate-y-[364px] !bg-cover bg-center overflow-hidden px-[26px] md:px-[64px] lg:px-[100px] h-[234.68px] md:h-[867px]"
          style={{
            backgroundImage: `url("/images/venture-capital/group2.svg")`,
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
              Mentorship and Guidance{" "}
            </h2>
            <p className="md:pt-3 md:px-6 px-[6.5px] text-[5.42px] md:text-[20px]">
              We connect startups with experienced mentors who offer guidance,
              insights, & practical advice, helping them refine their strategies
              and overcome obstacles.
            </p>
          </div>
        </div>

        {/* 3rd item (first column again) */}
        <div
          className="rounded-[6.5px] md:rounded-[24px] grid place-items-center translate-y-[98.58px] md:translate-y-[364px] !bg-cover bg-center overflow-hidden px-[26px] md:px-[64px] lg:px-[100px] h-[234.68px] md:h-[867px]"
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
              Industry Connections{" "}
            </h2>
            <p className="md:pt-3 md:px-6 px-[6.5px] text-[5.42px] md:text-[20px]">
              Our community provides access to a diverse network of investors,
              partners, and industry leaders, facilitating valuable connections
              that can propel businesses forward.
            </p>
          </div>
        </div>

        {/* 4th item (second column again) */}
        <div
          className="rounded-[6.5px] md:rounded-[24px] grid place-items-center !bg-contain bg-no-repeat bg-center overflow-hidden px-[26px] md:px-[64px] lg:px-[100px] h-[234.68px] md:h-[867px]"
          style={{
            backgroundImage: `url("/images/venture-capital/lightbulb.svg")`,
            backgroundColor: "#FD7B41",
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
              Impact-Driven Focus{" "}
            </h2>
            <p className="md:pt-3 md:px-6 px-[6.5px] text-[5.42px] md:text-[20px]">
              We offer investments that align with social and environmental
              progress, contributing to Africa's development goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
