import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="relative md:pt-20 md:h-auto bg-[#FFFDF7] ">
      <Image
        src="/images/about-us/cash.svg"
        alt="cash"
        width={550}
        height={583}
        className="absolute z-30 -top-40 right-0 object-right "
      />
      <div className="bg-[#FFFDF7] h-full  md:pt-25 pt-5 pl-6 pr-[62px]">
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
          <h2 className="relative inset-0 z-10 -top-14 text-[36px] md:text-[96px] -tracking-[1.5%] font-semibold text-[#0C4642] leading-[95px] md:leading-[115px]">
            business ideas
          </h2>
        </div>
        <div className=" lg:ml-[51%] lg:mr-[11.8%] lg:w-[564px] border-t-1 pt-12 md:pt-16 ">
          <p className="text-[14px] md:text-[28px] lg:mt-6 md:mb-[106.5px]">
            At Live Capital, we have a unique approach to funding — embracing
            the crazy and the unconventional.
          </p>
        </div>
      </div>
      <div className=" mx-30">
        <div className="flex flex-col lg:flex-row items-center justify-center ">
          <div className=" relative bg-[#FCF6EA] min-w-[330px] h-[410px] -rotate-[5.46deg] px-[37.2px] py-[28.05px] rounded-[24px] z-0">
            <Image
              src="/images/about-us/art1.svg"
              alt="art1"
              width={208}
              height={208}
              className="relative inset-0  -rotate-[.deg]"
            />
            <div className="w-[248.91px]">
              <h2 className="text-[24px] font-bold">Community</h2>
              <p className="text-[16px] font-medium mt-[4.56px]">
                We support companies that build and foster community.{" "}
              </p>
            </div>
          </div>
          <div className="lg:-top-[26px] lg:-left-[26px] bg-[#FFE9F4] min-w-[330px] h-[410px] p-[37.2px] py-[28.05px] rounded-[24px] z-10">
            <Image
              src="/images/about-us/art2.svg"
              alt="art1"
              width={241.23}
              height={240}
              className="relative inset-0  "
            />
            <div className="w-[248.91px]">
              <h2 className="text-[24px] font-bold">Resilience</h2>
              <p className="text-[16px] font-medium mt-[4.56px]">
                We encourage perseverance and adaptability in the face of
                challenges & uncertainties.{" "}
              </p>
            </div>
          </div>
          <div className="lg:top-[60.17px] lg:-left-[60px] bg-[#E9EFFF] min-w-[330px] h-[410px] rotate-[5deg] px-[37.2px] py-[28.05px] rounded-[24px] z-20">
            <Image
              src="/images/about-us/art3.svg"
              alt="art1"
              width={191.7}
              height={184}
              className="relative inset-0 z-0 -rotate-[.deg]"
            />
            <div className="w-[248.91px]">
              <h2 className="text-[24px] font-bold">Ambition</h2>
              <p className="text-[16px] font-medium mt-[4.56px]">
                We support bold and visionary ideas that aim to disrupt
                industries and drive innovation.{" "}
              </p>
            </div>
          </div>
          <div className="lg:-top-[1.57px] lg:-left-[90px] bg-[#68DACB] min-w-[330px] h-[410px] rotate-[6.5deg] px-[37.2px] py-[28.05px] rounded-[24px] z-30">
            <Image
              src="/images/about-us/art4.svg"
              alt="art1"
              width={240}
              height={240}
              className="relative inset-0 z-0 -rotate-[5deg]"
            />
            <div className="w-[248.91px]">
              <h2 className="text-[24px] font-bold">Zeal</h2>
              <p className="text-[16px] font-medium mt-[4.56px]">
                We seek out passionate and enthusiastic entrepreneurs who dare
                to pursue their dreams.{" "}
              </p>
            </div>
          </div>
          <div className="lg:top-[19.15px] lg:-left-[140px] bg-[#162D67] min-w-[330px] h-[410px] -rotate-[5.46deg] px-[37.2px] py-[28.05px] rounded-[24px] z-40">
            <Image
              src="/images/about-us/art5.svg"
              alt="art1"
              width={201}
              height={200}
              className="relative inset-0 z-0 -rotate-[.deg]"
            />
            <div className="w-[248.91px]">
              <h2 className="text-[24px] font-bold">Yield</h2>
              <p className="text-[16px] font-medium mt-[4.56px]">
                We’re committed to delivering tangible results and impactful
                growth for startups and the broader ecosystem.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
