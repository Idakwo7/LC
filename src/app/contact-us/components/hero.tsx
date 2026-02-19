export default function Hero() {
  return (
    <section className="py-12">
      <div className="relative flex flex-col items-center">
        <div className="pt-10 md:pt-[113px] px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          {/* Main Heading */}
          <h2 className="relative inset-0 z-10 text-[28px] sm:text-[36px] md:text-[80px] font-semibold text-[#0C4642] leading-[1px] sm:leading-[48px] md:leading-[80px] -tracking-[0.5px] md:-tracking-[1.5px] text-center md:text-left">
            This is our contact page
          </h2>

          {/* Highlighted Box */}
          <div className="relative -top-2 sm:-top-4 bg-[#E2F99C] gap-2 shrink-0 inline-flex items-center justify-center py-2 sm:py-4 md:pt-[70px] md:pb-[100px] px-2 sm:px-4 md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] lg:h-[136px] rounded-[4px] md:!rounded-[8px] leading-[95%] tracking-[2px] sm:tracking-[4px] md:tracking-[7.33px] mt-4 sm:mt-6">
            <h2
              className="text-[32px] sm:text-[52px] md:text-[120px] text-[#0C4642] -tracking-[0.5px] sm:-tracking-[1.33px] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit leading-[36px] sm:leading-[52px] md:leading-[117px] text-center md:text-left"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              How can we help you?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
