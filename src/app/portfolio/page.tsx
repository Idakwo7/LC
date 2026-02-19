import PortfolioHero from "./components/hero";
import ImageCard from "./components/image-card";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <ImageCard />
      <div>
        <p className="font-cormorant italic text-[25.45px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] text-center -tracking-[1px] sm:-tracking-[2px] md:-tracking-[3px] lg:-tracking-[3.5px] xl:-tracking-[3.97px] text-[#0C4642] leading-tight">
          Have a disruptive idea?{" "}
          <span className="underline hover:opacity-80 transition-opacity">
            Get in touch!
          </span>
        </p>
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
