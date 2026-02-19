import Image from "next/image";
import Link from "next/link";
import { members } from "../../components/home-team";
import { notFound } from "next/navigation";

interface MemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="border-t-[1px] border-[#E0E4E0] md:pt-20 md:mt-6">
      <div className="md:h-[959px] mt-4 md:mt-6">
        <Link
          href="/about-us"
          className=" flex items-center gap-[8px] md:mx-30 mx-4"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              d="M3.57813 12.4981C3.5777 12.6905 3.65086 12.8831 3.79761 13.0299L9.7936 19.0301C10.0864 19.3231 10.5613 19.3233 10.8543 19.0305C11.1473 18.7377 11.1474 18.2629 10.8546 17.9699L6.13418 13.2461L20.3295 13.2461C20.7437 13.2461 21.0795 12.9103 21.0795 12.4961C21.0795 12.0819 20.7437 11.7461 20.3295 11.7461L6.14168 11.7461L10.8546 7.03016C11.1474 6.73718 11.1473 6.2623 10.8543 5.9695C10.5613 5.6767 10.0864 5.67685 9.79362 5.96984L3.84392 11.9233C3.68134 12.0609 3.57812 12.2664 3.57812 12.4961L3.57813 12.4981Z"
              fill="#4F584FB2"
            />
          </svg>
          <h3 className="text-[#4F584FB2] text-[16px] md:font-medium md:text-[16px] md:leading-[100%] md:tracking-[-0.32px]">
            Back
          </h3>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[152px] gap-6 md:mx-30 md:mt-[34px] ">
          <div className="order-2 md:order-1 mx-4 md:mx-0">
            <h2 className="font-semibold text-[18px] leading-[150%] tracking-[0.15px] md:font-['Schibsted_Grotesk'] md:font-bold md:text-[32px] md:leading-[100%] md:tracking-[0px] ">
              {member.fullName}
            </h2>
            <p
              className="font-['Plus_Jakarta_Sans'] font-medium text-[14px] leading-[180%] tracking-[0px] md:text-[16px] md:leading-[190%] md:tracking-[0.15px] md:mt-6 mt-3"
              style={{ verticalAlign: "middle" }}
            >
              {member.bio}
            </p>
            <div className="mb-16 md:mb-0 mt-10">
              <ul className="flex gap-4">
                <li
                  className="text-[#4F584FB2] font-semibold text-[18px] leading-[100%] tracking-[0.15px] underline"
                  style={{ fontStyle: "normal" }}
                >
                  <a
                    href="#"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <svg
                      width="11.25"
                      height="10.5"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline"
                    >
                      <path
                        d="M18.9203 6.0505C18.7834 5.86991 18.5665 5.75324 18.3223 5.75315L9.32695 5.75C8.91265 5.74985 8.57667 6.08545 8.57653 6.49958C8.57638 6.9137 8.91212 7.24954 9.32643 7.24968L16.5172 7.2522L5.79779 17.9716C5.5049 18.2645 5.5049 18.7394 5.79779 19.0323C6.09069 19.3252 6.56556 19.3252 6.85845 19.0323L17.5725 8.31828L17.5748 15.4945C17.5749 15.9086 17.9109 16.2442 18.3252 16.2441C18.7395 16.244 19.0752 15.9081 19.0751 15.494L19.0722 6.56074C19.0853 6.38214 19.0346 6.19976 18.9203 6.0505Z"
                        fill="#4F584FB2"
                        stroke="#4F584FB2"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  className="inline-flex items-center text-[#4F584FB2] font-semibold text-[18px] leading-[100%] tracking-[0.15px] underline"
                  style={{ fontStyle: "normal" }}
                >
                  <a
                    href="#"
                    aria-label="X Profile"
                    className="inline-flex items-center gap-1"
                  >
                    X(formerly Twitter)
                    <svg
                      width="11.25"
                      height="10.5"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline"
                    >
                      <path
                        d="M18.9203 6.0505C18.7834 5.86991 18.5665 5.75324 18.3223 5.75315L9.32695 5.75C8.91265 5.74985 8.57667 6.08545 8.57653 6.49958C8.57638 6.9137 8.91212 7.24954 9.32643 7.24968L16.5172 7.2522L5.79779 17.9716C5.5049 18.2645 5.5049 18.7394 5.79779 19.0323C6.09069 19.3252 6.56556 19.3252 6.85845 19.0323L17.5725 8.31828L17.5748 15.4945C17.5749 15.9086 17.9109 16.2442 18.3252 16.2441C18.7395 16.244 19.0752 15.9081 19.0751 15.494L19.0722 6.56074C19.0853 6.38214 19.0346 6.19976 18.9203 6.0505Z"
                        fill="#4F584FB2"
                        stroke="#4F584FB2"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              src="/images/about-us/wavy.svg"
              alt="wavy"
              width={254}
              height={278}
              className="absolute top-[514px] -left-[87px] object-cover hidden md:block"
            />
            <Image
              src="/images/about-us/wavy2.svg"
              alt="wavy2"
              width={819.37}
              height={774}
              className="absolute -top-[57.38px] left-[102.89px] md:block hidden"
            />
            <div className="relative md:w-[426px] md:h-[597px] w-[376px] h-[430px] rounded-[12px] md:rounded-[9px] overflow-hidden mx-auto md:mx-0 mt-[30px] md:mt-0">
              <Image
                src={member.src}
                alt={member.fullName}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
