"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AvailableJobs } from "./available-jobs";
import { div } from "motion/react-client";
import Link from "next/link";

export default function Jobs() {
  // Job Function state
  const [isFunctionOpen, setIsFunctionOpen] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const functionRef = useRef<HTMLDivElement>(null);

  // Seniority state
  const [isSeniorityOpen, setIsSeniorityOpen] = useState(false);
  const [selectedSeniority, setSelectedSeniority] = useState<string | null>(
    null
  );
  const seniorityRef = useRef<HTMLDivElement>(null);

  // Industry state
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const industryRef = useRef<HTMLDivElement>(null);

  // Data arrays
  const jobFunctions = [
    "All",
    "Accounting and Finance",
    "Administration",
    "Data Science",
    "Design",
    "IT",
    "Legal",
    "Marketing and Communications",
    "Operations",
    "HR",
    "Product",
    "Sales and Development",
  ];

  const seniorityLevels = [
    "All",
    "Internship",
    "Entry Level",
    "Mid-Senior Level",
    "Senior",
    "Director",
    "Vice President",
    "CXO",
    "Executive",
    "Software Engineering",
  ];

  const industries = [
    "All",
    "Hospitality & Tourism",
    "Healthcare",
    "Manufacturing",
    "Technology",
    "Entertainment",
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        functionRef.current &&
        !functionRef.current.contains(event.target as Node)
      ) {
        setIsFunctionOpen(false);
      }
      if (
        seniorityRef.current &&
        !seniorityRef.current.contains(event.target as Node)
      ) {
        setIsSeniorityOpen(false);
      }
      if (
        industryRef.current &&
        !industryRef.current.contains(event.target as Node)
      ) {
        setIsIndustryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reusable dropdown renderer
  const renderDropdown = (
    label: string,
    isOpen: boolean,
    setIsOpen: (open: boolean) => void,
    selected: string | null,
    setSelected: (value: string) => void,
    options: string[],
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <div
      className=" bg-[#FFFFFF] rounded-[16px] px-5 relative my-4 md:my-0"
      ref={ref}
    >
      <div className="flex items-center gap-3">
        <h3 className="text-gray-700 font-medium">{label}:</h3>
        <div className="w-auto rounded-md px-3 py-2 text-[#008560]">
          {selected || "All"}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={`Toggle ${label} dropdown`}
          className="p-2"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <Image
            src="/images/join-us/arrow-down.svg"
            alt="arrow-down"
            width={24}
            height={24}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute right-0 mt-2 w-full sm:w-64 bg-white rounded-md shadow-lg z-10 transition-all duration-200 ease-in-out transform origin-top ${
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="py-1 max-h-60 overflow-auto" role="listbox">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 w-full ${
                selected === option ? "bg-gray-100 font-medium" : ""
              }`}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={selected === option}
            >
              <div className="flex items-center justify-between w-full">
                <span>{option}</span>
                <Image
                  src="/images/join-us/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 ${
                    (selected || "All") === option ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <div className="bg-[#F4F8F4] max-w-screen px-30 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-900 text-[#0C4642]">
            Available Jobs
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {renderDropdown(
              "Job function",
              isFunctionOpen,
              setIsFunctionOpen,
              selectedFunction,
              setSelectedFunction,
              jobFunctions,
              functionRef
            )}
            {renderDropdown(
              "Seniority",
              isSeniorityOpen,
              setIsSeniorityOpen,
              selectedSeniority,
              setSelectedSeniority,
              seniorityLevels,
              seniorityRef
            )}
            {renderDropdown(
              "Industry",
              isIndustryOpen,
              setIsIndustryOpen,
              selectedIndustry,
              setSelectedIndustry,
              industries,
              industryRef
            )}
          </div>
        </div>
      </div>
      <div className="md:mx-30">
        <h2 className="text-lg font-medium text-gray-700">
          Showing: {AvailableJobs.length} job
          {AvailableJobs.length !== 1 ? "s" : ""}
        </h2>
      </div>
      <div className="md:mx-30 ">
        <div>
          {AvailableJobs.map((job) => (
            <div
              key={job.jobType}
              className="bg-[#FCFCF6] rounded-[16px] my-10"
            >
              <div className=" flex items-center justify-between px-6 py-4 ">
                <div className="flex items-center grow">
                  <Image
                    src={job.logo}
                    alt={job.jobType}
                    width={100}
                    height={100}
                    className="mr-2"
                  />
                  <div>
                    <h2 className="font-semibold text-[18px] leading-[150%] tracking-[0.15px] pb-1">
                      {job.jobDescription}
                    </h2>
                    <h3 className="font-medium text-[16px] leading-[150%] tracking-[0.15px]  pb-3">
                      {job.jobType}
                    </h3>
                    <div className="flex">
                      <p>{job.jobLocation}</p>
                      <p>{job.datePosted}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    href={job.jobType}
                    className="pt-3 pr-4 pb-3 pl-6 gap-1 rounded-md bg-[#FFFFFF] flex text-[#008560]"
                  >
                    <span className="">Apply</span>
                    <svg
                      strokeWidth=""
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color=""
                    >
                      <path
                        d="M21.0791 12.519C21.0744 12.7044 21.0013 12.8884 20.8599 13.0299L14.8639 19.0301C14.5711 19.3231 14.0962 19.3233 13.8032 19.0305C13.5103 18.7377 13.5101 18.2629 13.8029 17.9699L18.5233 13.2461L4.32813 13.2461C3.91391 13.2461 3.57813 12.9103 3.57812 12.4961C3.57812 12.0819 3.91391 11.7461 4.32812 11.7461L18.5158 11.7461L13.8029 7.03016C13.5101 6.73718 13.5102 6.2623 13.8032 5.9695C14.0962 5.6767 14.5711 5.67685 14.8639 5.96984L20.813 11.9228C20.976 12.0603 21.0795 12.2661 21.0795 12.4961C21.0795 12.5038 21.0794 12.5114 21.0791 12.519Z"
                        fill="#008560"
                      />
                    </svg>
                  </Link>
                  <p className="text-[18px] mt-4 font-semibold leading-[150%] tracking-[0.15px]">
                    Level: {job.jobLevel}
                  </p>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
