"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateNavHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      // Update both the root CSS variable and the document element style
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
      document.documentElement.style.setProperty(
        "--hero-mobile-height",
        `calc(453px + ${height}px)`
      );
      document.documentElement.style.setProperty(
        "--hero-desktop-height",
        `calc(100vh - ${height}px)`
      );
    };

    // Initial update
    updateNavHeight();

    // Update on window resize
    window.addEventListener("resize", updateNavHeight);

    // Cleanup
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <header ref={headerRef} className="px-[24px] md:px-[120px] pt-[63px]">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 md:px-[14px]">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={21}
            height={21}
            className="md:w-8 md:h-8"
          />
          <Image
            src="/images/LiveCapital.svg"
            alt="logo"
            width={87}
            height={17}
            className="md:w-[152px] md:h-7"
          />
        </div>
        {/* Overlapping links + button in same container */}
        <div className="lg:fixed lg:top-12 lg:right-31 z-50 flex items-center bg-[#D8E3E2] rounded-[8px]">
          <div className="hidden md:block relative w-[108px] h-[68px]">
            <Link
              href="/"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[11px] py-3 md:py-[22px] bg-white text-[16px] font-medium ml-1 text-[#4A4342] ${
                pathname === "/"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              Homepage
            </Link>
            <Link
              href="/about"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[19px] py-3 md:py-[22px] bg-white text-[16px] ml-1 text-[#4A4342] ${
                pathname === "/about"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[19px] py-3 md:py-[22px] bg-white text-[16px] ml-1 text-[#4A4342] ${
                pathname === "/portfolio"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/career"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[19px] py-3 md:py-[22px] bg-white text-[16px] ml-1 text-[#4A4342] ${
                pathname === "/career"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              Career
            </Link>
          </div>
          <button
            className="flex items-center relative z-50 rounded px-2 md:px-[19px] py-2 md:py-[22px] bg-white m-1"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="toggle"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#4A4342"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className=" fixed top-0 left-0 right-0 z-40 bg-[#80CD75] h-screen">
              <div className="grid grid-cols-2 md:pt-[136px] md:pl-[56px] ">
                <div>
                  <ul className="flex flex-col md:gap-10">
                    <a href="">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Home
                      </li>
                    </a>
                    <a href="/about-us">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        About Us
                      </li>
                    </a>
                    <a href="">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Portfolio
                      </li>
                    </a>
                    <a href="">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Career
                      </li>
                    </a>
                    <a href="">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Contact
                      </li>
                    </a>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
