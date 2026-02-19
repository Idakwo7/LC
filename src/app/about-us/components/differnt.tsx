export default function Different() {
  return (
    <section className="">
      <div className=" pt-15 lg:pt-10 lg:pt-30 lg:px-30 px-5">
        <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[70px] leading-[10px] -tracking-[1.5%]">
          What
        </h2>
        <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[115px] leading-[55px] -tracking-[1.5%]">
          makes us
        </h2>

        <div className="relative -top-4 bg-[#E2F99C] gap-[8px] shrink-0 inline-flex items-center justify-center py-2 md:pt-[70px] md:pb-[100px] px-[8px] md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] lg:h-[136px] rounded-[4px] md:!rounded-[8px]">
          <h2
            className=" text-[52px] md:text-[146.7px] text-[#0C4642] -tracking-[1.33px] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit leading-[52px] md:leading-[117px]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Different
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 h-auto lg:gap-16 mt-[49px] lg:mt-0">
          {/* Community-focused section - moved to top for mobile */}
          <div className="border-t-[1px] order-1 lg:order-2">
            <h2 className="text-[24px] md:text-[36px] font-bold mb-4 md:mb-6 mt-8 lg:mt-16 text-[#0C4642]">
              We are Community-focused
            </h2>
            <p className="mt-4 md:mt-6 text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed">
              At Live Capital, we go beyond traditional funding. Our approach is
              designed to support startups holistically, offering:
            </p>
            <h3 className="text-[20px] md:text-[24px] font-bold my-3 md:my-4">
              Networking Opportunities
            </h3>
            <p className="text-[16px] md:text-[20px] leading-relaxed">
              Our community provides access to a diverse network of investors,
              partners, industry leaders, facilitating valuable connections that
              can propel businesses forward.
            </p>
            <h3 className="text-[20px] md:text-[24px] font-bold my-3 md:my-4">
              Mentorship and Support
            </h3>
            <p className="text-[16px] md:text-[20px] leading-relaxed">
              We connect startups with experienced mentors who offer guidance,
              insights, and practical advice, helping them refine their
              strategies & overcome obstacles.
            </p>
          </div>

          {/* Funding Solutions and Ecosystem Integration - moved to bottom for mobile */}
          <div className="lg:mt-[700px] mt-16 flex flex-col gap-y-30 order-2 lg:order-1">
            <div className="border-t-[1px]">
              <h2 className="text-[24px] md:text-[36px] font-bold mb-4 md:mb-6 mt-8 lg:mt-16 text-[#0C4642]">
                We offer Flexible Funding Solutions
              </h2>
              <p className="mt-4 md:mt-6 text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed">
                Our investment strategy is designed to accommodate the diverse
                needs of startups, offering a mix of equity and debt financing
                tailored to support their unique journeys.
              </p>
            </div>
            <div className="border-t-[1px]">
              <h2 className="text-[24px] md:text-[36px] font-bold mb-4 md:mb-6 mt-8 lg:mt-16 text-[#0C4642]">
                We are committed to Ecosystem Integration
              </h2>
              <p className="mt-4 md:mt-6 text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed">
                We believe that fostering partnerships within the ecosystem
                helps to increase overall impact. By connecting startups with
                various stakeholders — be it investors, mentors, or industry
                leaders — we help cultivate a collaborative environment where
                ideas can flourish and businesses can thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-32 lg:mt-40 px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="font-cormorant italic text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] text-center -tracking-[1px] sm:-tracking-[2px] md:-tracking-[3px] lg:-tracking-[3.5px] xl:-tracking-[3.97px] text-[#0C4642] leading-tight">
          Be part of us .{" "}
          <span className="underline hover:opacity-80 transition-opacity">
            Join this team
          </span>
        </p>
      </div>
    </section>
  );
}
