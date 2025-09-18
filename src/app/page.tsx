import Image from "next/image";
import header from "./components/header";
import Hero from "./components/hero";
import HomeTeam from "./components/home-team";
import OurApproach from "./components/our-approach";
import VentureCaptitalism from "./components/venture-capitalism";
import WhoWeInvestIn from "./components/who-we-invest-in";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurApproach />
      <VentureCaptitalism />
      <WhoWeInvestIn />
      <HomeTeam />
      <div className="flex justify-center mb-[176px]">
        <button className="px-[40px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-30 z-30 text-[18px]">
          Join the team
        </button>
      </div>
      <Image
        src="/Background.svg"
        alt="background"
        width={1440}
        height={1024}
        className="w-full"
      />
    </main>
  );
}
