export default function Different() {
  return (
    <section className="">
      <div className="pt-10 md:pt-30 md:px-30 px-5">
        <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[115px] leading-[60px] -tracking-[1.5%]">
          What <br /> makes us
        </h2>

        <div className="relative -top-4 bg-[#E2F99C] gap-[8px] shrink-0 inline-flex items-center justify-center py-2 md:pt-[70px] md:pb-[100px] px-[8px] md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] lg:h-[136px] rounded-[4px] md:!rounded-[8px]">
          <h2
            className=" text-[52px] md:text-[146.7px] text-[#0C4642] -tracking-[1.33px] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit leading-[52px] md:leading-[117px]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Different
          </h2>
        </div>

        <div className=" lg:grid grid-cols-2  h-auto lg:gap-16">
          <div className="mt-[700px] flex flex-col gap-y-30">
            <div className="border-t-[1px] ">
              <h2 className="text-[36px] font-bold mb-6 lg:mt-16 text-[#0C4642]">
                We offer Flexible Funding Solutions
              </h2>
              <p className=" mt-6 text-[24px] md:text-[28px] ">
                Our investment strategy is designed to accommodate the diverse
                needs of startups, offering a mix of equity and debt financing
                tailored to support their unique journeys.{" "}
              </p>
            </div>
            <div className="border-t-[1px]">
              <h2 className="text-[36px] font-bold mb-6 lg:mt-16 text-[#0C4642]">
                We are committed to Ecosystem Integration
              </h2>
              <p className="mt-6 text-[24px] md:text-[28px] ">
                We believe that fostering partnerships within the ecosystem
                helps to increase overall impact. By connecting startups with
                various stakeholders — be it investors, mentors, or industry
                leaders — we help cultivate a collaborative environment where
                ideas can flourish and businesses can thrive.
              </p>
            </div>
          </div>
          <div className="border-t-[1px] ">
            <h2 className="text-[36px] font-bold mb-6 lg:mt-16 text-[#0C4642]">
              We are Community-focused
            </h2>
            <p className=" mt-6 text-[26px] ">
              At Live Capital, we go beyond traditional funding. Our approach is
              designed to support startups holistically, offering:
            </p>
            <h3 className="text-[24px] font-bold my-4">
              Networking Opportunities
            </h3>
            <p className="text-[24px]">
              Our community provides access to a diverse network of investors,
              partners, industry leaders, facilitating valuable connections that
              can propel businesses forward.
            </p>
            <h3 className="text-[24px] font-bold my-4">
              Mentorship and Support
            </h3>
            <p className="text-[24px]">
              We connect startups with experienced mentors who offer guidance,
              insights, and practical advice, helping them refine their
              strategies & overcome obstacles.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-40">
        <p className="font-cormorant italic text-[80px] text-center -tracking-[3.97px] text-[#0C4642]">
          Be part of us . <span className="underline">Join this team</span>
        </p>
      </div>
    </section>
  );
}
