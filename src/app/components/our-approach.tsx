import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="relative px-5 md:px-30 pt-10 md:pt-20 md:h-[1050px] h-[550px] bg-[#FFFFFF]">
      <div className="bg-[#FFF1EB] h-full  md:pt-25 pt-5 pl-6 pr-[62px]">
        <h1 className="md:ml-30 bg-[#E2F99C] !text-[20px] md:!text-[32px] lg:!text-[44px] font-semibold italic !leading-[20px] lg:!leading-[44px] !tracking-[-1.33px] rounded-[4px] lg:rounded-[8px] rotate-[4.825deg] lg:rotate-[4.91deg] w-fit pr-[6.209px] pb-[4.044px] pl-[5.997px] lg:!py-[4px] lg:!px-[12px] font-cormorant text-[#0C5752]">
          Our Approach
        </h1>
        <div className="md:pl-30">
          <h2 className="relative inset-0 z-10 text-[36px] lg:text-[104px] font-semibold text-[#0C4642] leading-[60px] md:leading-[115px] -tracking-[1.5%]">
            Supporting
          </h2>
          <div className=" relative -top-4 bg-[#80CD75] md:gap-[8px] shrink-0 inline-flex items-center justify-center md:py-[12px] px-[8px] md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] bg-80CD75 lg:h-[136px] rounded-[4px] md:rounded-[8px]">
            <h2
              className="  text-[52px] md:text-[146.7px] text-[#FFFFFF] md:-tracking-[7.88px] font-medium italic font-cormorant uppercase w-fit leading-[50px] md:leading-[117px]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              c.r.a.z.y
            </h2>
          </div>
          <h2 className="relative inset-0 z-10 -top-14 text-[36px] md:text-[96px] -tracking-[1.5%] font-semibold text-[#0C4642] leading-[95px] md:leading-[115px] md:hidden">
            businesses
          </h2>
          <h2 className="relative inset-0 z-10 -top-14 text-[36px] md:text-[96px] -tracking-[1.5%] font-semibold text-[#0C4642] leading-[95px] md:leading-[115px] hidden md:block">
            business ideas
          </h2>
          <Image
            src="/images/about-us/deco-petale-titre.svg"
            alt="deco-petale-titre"
            width={47}
            height={53}
            className="relative lg:-top-12 lg:left-140 w-[22px] md:w-auto -top-22 left-50"
          />
        </div>
        <div className=" lg:ml-[51%] lg:mr-[11.8%] lg:w-[564px] border-t-1 pt-12 md:pt-16 ">
          <p className="text-[14px] md:text-[28px] md:mt-6">
            At Live Capital, we have a unique approach to funding — embracing
            the crazy and the unconventional.
          </p>
          <button className="px-[40px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-10 z-30 text-[18px] font-bold">
            Read more about us
          </button>
        </div>
      </div>
    </section>
  );
}
