/**
 * Home Page Component
 *
 * This is the main landing page for the Live Capital website.
 * It composes various section components to create the complete page layout.
 *
 * Sections:
 * - Hero: Main banner section with call-to-action
 * - OurApproach: Explains the company's investment approach
 * - VentureCapitalism: Overview of venture capitalism focus
 * - WhoWeInvestIn: Details about investment criteria
 * - HomeTeam: Introduction to the team
 */

// Next.js Image component for optimized image loading
import Image from "next/image";

// Import section components
import Hero from "./components/hero";
import HomeTeam from "./components/home-team";
import OurApproach from "./components/our-approach";
import VentureCaptitalism from "./components/venture-capitalism";
import WhoWeInvestIn from "./components/who-we-invest-in";

/**
 * Home Component
 *
 * The main page component that renders all sections of the home page.
 * Implements responsive design with different layouts for mobile and desktop.
 */
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <OurApproach />
      <VentureCaptitalism />
      <WhoWeInvestIn />
      <HomeTeam />
      {/* Mobile-only CTA section */}
      <div className="flex flex-col justify-center items-center block md:hidden">
        <h2 className="font-cormorant italic text-[#0C4642] text-[36px] -tracking-[1.49px] mt-16 font-medium">
          and you can be part too
        </h2>
        <button
          className="px-[20px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-6 z-30 text-[18px] font-bold"
          aria-label="Join us on mobile"
        >
          Join us
        </button>
      </div>

      {/* Desktop-only CTA section */}
      <div className="md:flex items-center justify-center md:block hidden w-full">
        <button
          className="px-[40px] py-[16px] block bg-[#008560] border rounded-[8px] text-[#FFFFFF] mt-30 z-30 text-[18px] font-bold"
          aria-label="Join the team on desktop"
        >
          Join the team
        </button>
      </div>
      {/* Decorative background image */}
      <Image
        src="/Background.svg"
        alt="Decorative background pattern"
        width={1440}
        height={1024}
        className="w-full"
        priority
        aria-hidden="true"
      />
    </main>
  );
}
