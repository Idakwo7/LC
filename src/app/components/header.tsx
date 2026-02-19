/**
 * Main navigation header with responsive design and mobile menu support.
 * Handles dynamic height calculations for proper layout adjustments.
 */

"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateNavHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 0;

      // Update CSS custom properties for responsive layout
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

    // Initial height update
    updateNavHeight();

    // Add resize event listener to update on window size changes
    window.addEventListener("resize", updateNavHeight);

    // Cleanup function to remove event listener
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
        <div className="lg:fixed lg:top-12 lg:right-31 z-60 flex items-center bg-[#D8E3E2] rounded-[8px]">
          <div className="hidden md:block relative w-[108px] h-[68px]">
            <Link
              href="/home"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[11px] py-3 md:py-[22px] bg-white text-[16px] font-medium ml-1 text-[#4A4342] ${
                pathname === "/"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              Homepage
            </Link>
            <Link
              href="/about-us"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[19px] py-3 md:py-[22px] bg-white text-[16px] ml-1 text-[#4A4342] whitespace-nowrap ${
                pathname.includes("/about-us")
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
              href="/join-us"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[19px] py-3 md:py-[22px] bg-white text-[16px] ml-1 text-[#4A4342] ${
                pathname === "/join-us"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              Career
            </Link>
            <Link
              href="/contact-us"
              className={`absolute inset-0 inline-flex items-center justify-center rounded px-4 md:px-[19px] py-3 md:py-[22px] bg-white text-[16px] ml-1 text-[#4A4342] whitespace-nowrap ${
                pathname === "/contact-us"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              Contact Us
            </Link>
          </div>
          <button
            className="flex items-center relative z-50 rounded px-2 md:px-[19px] py-2 md:py-[22px] bg-white m-1"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              className="w-6 h-6"
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Top line */}
                <motion.path
                  stroke="#4A4342"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    closed: { d: "M4 6h16" },
                    open: { d: "M6 6L18 18" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Middle line */}
                <motion.path
                  stroke="#4A4342"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    closed: { d: "M4 12h16", opacity: 1 },
                    open: { d: "M4 12h16", opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Bottom line */}
                <motion.path
                  stroke="#4A4342"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    closed: { d: "M4 18h16" },
                    open: { d: "M6 18L18 6" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.div>
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
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className=" fixed top-0 left-0 right-0 z-50 bg-[#80CD75] h-screen">
              <div className="grid grid-cols-2 md:pt-[136px] md:pl-[100px] gap-x-[238px] max-w-[1440px] md:mr-auto">
                <div>
                  <ul className="flex flex-col md:gap-10">
                    <a href="/">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Home
                      </li>
                    </a>
                    <a href="/about-us">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        About Us
                      </li>
                    </a>
                    <a href="/portfolio">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Portfolio
                      </li>
                    </a>
                    <a href="/join-us">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Career
                      </li>
                    </a>
                    <a href="/contact-us">
                      <li className="md:text-[104px] font-semibold text-[#FFFFFF] font-semibold leading-[112px]">
                        Contact
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-10   justify-between">
                  <div>
                    <ul className="flex flex-col gap-y-6">
                      <li className="font-medium text-[16px] leading-[20px] tracking-[-0.36px] text-[#0C4642]">
                        <a href="mailto:contact@livecapital.fund">
                          contact@livecapital.fund
                        </a>
                      </li>
                      <li className="font-medium text-[16px] leading-[20px] tracking-[-0.36px] text-[#0C4642]">
                        <a href="mailto:contact@livecapital.fund">
                          +234 (0) 8123456789{" "}
                        </a>
                      </li>
                      <li className="font-medium text-[16px] leading-[20px] tracking-[-0.36px] text-[#0C4642]">
                        <a href="mailto:contact@livecapital.fund">
                          52 Cameron Road, Ikoyi, Lagos.{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-y-6 font-cormorant italic text-[20px] leading-[100%] text-[#0C4642] [&_a]:underline">
                      <li>
                        <a
                          href="https://instagram.com/livecapital"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com/company/livecapital"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://facebook.com/livecapital"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/livecapital"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          X (formerly Twitter)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="px-[40px] py-[16px] block bg-[#008560] rounded-[8px] text-[#FFFFFF]  z-30 text-[18px] font-bold w-fit ">
                    Pitch your idea
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
