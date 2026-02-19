import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className=" md:px-20 px-4 bg-[#0C4642] bg-[#0C4642]">
        <div className=" flex items-center justify-between pt-10 md:pt-16">
          <div className="flex flex-col md:flex-row justify-between grow">
            <div>
              <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
                <a href="">
                  <li className="text-[#FFFFFF]">Home</li>
                </a>
                <a href="">
                  <li className="text-[#FFFFFF]">About Us</li>
                </a>
                <a href="">
                  <li className="text-[#FFFFFF]">Portfolio</li>
                </a>
                <a href="">
                  <li className="text-[#FFFFFF]">CareerPage</li>
                </a>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              {" "}
              <ul className="flex gap-10">
                <a href="">
                  <li className="font-cormorant italic text-[#E2F99C] text-[20px] underline">
                    Instagram
                  </li>
                </a>
                <a href="">
                  <li className="font-cormorant italic text-[#E2F99C] text-[20px] underline">
                    LinkedIn
                  </li>
                </a>
                <a href="">
                  <li className="font-cormorant italic text-[#E2F99C] text-[20px] underline">
                    Facebook
                  </li>
                </a>
                <a href="">
                  <li className="font-cormorant italic text-[#E2F99C] text-[20px] underline">
                    X
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[#FFFFFF] text-[242px] mt-10 md:mt-16 border-t border-b  border-[#0C5752] py-10 md:py-16">
          <Image
            src="/live-capital.svg"
            alt="live-capital"
            width={1280}
            height={218}
            className="w-full"
          />
        </div>
        <div className="md:py-[44.5px] py-5 md:py-0">
          <ul className="flex flex-col md:flex-row  justify-between gap-2 md:gap-0">
            <li className="text-[#FFFFFF]">Contact Us</li>
            <li className="text-[#FFFFFF]">+234(0)8123456789</li>
            <li className="text-[#FFFFFF]">52 Cameron Road, Ikoyi, Lagos.</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#DCDED5] md:py-6 md:px-20 py-2 px-5 flex justify-between items-center ">
        <div className="">
          <ul className="flex gap-4">
            <li className="text-[#008560]">Cookies Policy</li>
            <li className="text-[#008560] hidden md:block ">
              Terms of Service
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#008560]">© 2025 Live Capital.</p>
        </div>
      </div>
    </footer>
  );
}
