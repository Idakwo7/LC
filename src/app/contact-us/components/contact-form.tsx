"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <section className="py-16 flex items-center justify-center">
      <div className="gap-6 w-full max-w-[876px] flex flex-col px-4 sm:px-6">
        {/* Subject Selector */}
        <div className="relative w-full">
          <div 
            className="flex items-center justify-between shadow-sm p-6 rounded-[16px] w-full cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <h2 className="text-[#80867E]">Choose a Subject</h2>
            <Image
              src="/images/join-us/arrow-down.svg"
              alt="arrow"
              width={20}
              height={20}
              className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-[529px] max-w-full bg-white shadow-lg rounded-[16px] p-4 space-y-3">
              {[
                { id: 'general', label: 'General Enquiry', color: 'bg-blue-100' },
                { id: 'investor', label: 'Investor Enquiry', color: 'bg-green-100' },
                { id: 'aspiring', label: 'Aspiring Portfolio Company', color: 'bg-purple-100' },
                { id: 'press', label: 'Press/Media Enquiry', color: 'bg-yellow-100' },
                { id: 'portfolio', label: 'Enquiry about a Portfolio Company', color: 'bg-pink-100' }
              ].map((option) => (
                <div 
                  key={option.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setSelectedSubject(option.id);
                    setIsDropdownOpen(false);
                  }}
                >
                  <span className="text-gray-700">{option.label}</span>
                  <div className={`w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 ${selectedSubject === option.id ? option.color : ''}`}></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          className="shadow-sm p-6 rounded-[16px] w-full"
        />

        {/* Message Input */}
        <textarea
          placeholder="Message"
          className="shadow-sm px-6 py-4 rounded-[16px] w-full min-h-[120px] resize-none"
        />

        {/* File Upload */}
        <div
          className={`flex items-center justify-between shadow-sm p-6 rounded-[16px] cursor-pointer transition-all duration-300 w-full ${
            selectedFile
              ? "border-2 border-[#008560]"
              : "border border-gray-200"
          }`}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <div className="flex-1 min-w-0">
            <h2 className="text-[#80867E] truncate">
              {selectedFile ? selectedFile.name : "Attach a document"}
            </h2>
            {selectedFile && (
              <p className="text-xs text-gray-500 mt-1">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            )}
          </div>

          <div className="flex items-center">
            {isUploading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#008560]"></div>
            ) : selectedFile ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFile(null);
                  const input = document.getElementById(
                    "file-upload"
                  ) as HTMLInputElement;
                  if (input) input.value = "";
                }}
                className="text-red-500 hover:text-red-700 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : null}

            <Image
              src="/images/join-us/arrow-down.svg"
              alt="arrow"
              width={20}
              height={20}
              className={`transition-transform duration-300 ${
                selectedFile ? "transform rotate-180" : ""
              }`}
            />
          </div>

          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={async (e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setIsUploading(true);
                // Simulate upload delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setSelectedFile(files[0]);
                setIsUploading(false);
              }
            }}
          />
        </div>

        {/* Submit Button */}
        <button className="px-8 sm:px-[101px] py-[14px] sm:py-[18px] bg-[#008560] lg:mt-14 w-full sm:w-fit rounded-[8px] text-[#FFFFFF] font-bold">
          Submit
        </button>
      </div>
    </section>
  );
}
