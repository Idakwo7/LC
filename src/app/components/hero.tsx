import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-[24px] md:px-[120px] pt-[28px] md:pt-[125px] overflow-hidden min-h-[453px] md:min-h-[calc(100vh-var(--nav-height,0px))]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/handshake.svg"
          alt="Handshake illustration"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="relative md:w-[825px] ">
        <h1 className="text-[24px] md:text-[80px] font-semibold font-jakarta md:leading-24 ">
          We empower <br /> disruptive ideas <br /> that transform Africa.
        </h1>
        <h3 className="text-[14px] md:text-[28px] mt-6">
          Live Capital turns crazy ideas into successful businesses through
          funding, mentorship, and strategic support.
          <button className="px-[40px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-10 z-30 text-[18px]">
            Apply Now
          </button>
        </h3>
      </div>
    </section>
  );
}
