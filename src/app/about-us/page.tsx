import Hero from "./components/hero";
import OurApproach from "./components/our-approach";
import Different from "./components/differnt";
import HomeTeam from "../components/home-team";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Hero />
      <OurApproach />
      <Different />
      <HomeTeam />
      <div className=" lg:mt-[176px] mt-[100px] border-t-[1px] lg:ml-[40%] lg:mr-[11.8%] mx-6">
        <h2 className="text-[20px] lg:text-[36px] font-bold mb-6 lg:mt-16 text-[#0C4642] leading-[140%] -tracking-[0.33px] mt-[50px]">
          We are passionate about empowering the next generation of African
          entrepreneurs.
        </h2>
        <p className=" mt-6 text-[16px] lg:text-[24px] ">
          If you have a groundbreaking idea or a startup ready for growth, we
          invite you to explore opportunities with Live Capital. Together, we
          can turn your vision into reality and make a lasting impact on
          Africa’s economy.
        </p>
        <button className="px-[40px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-6 lg:mt-16 z-30 text-[18px] font-bold">
          Submit your pitch
        </button>
        <div className=""></div>
      </div>
      <Image
        src="/Background.svg"
        alt="background"
        width={1440}
        height={1024}
        className="w-full"
      />
    </>
  );
}
