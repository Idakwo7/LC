import Image from "next/image";
import Link from "next/link";

export const members = [
  {
    src: "/images/home-team/1.svg",
    fullName: "Somtochukwu Ifezue",
    role: "Partner",
    slug: "somtochukwu-ifezue",
    bio: "Somtochukwu Ifezue is transforming Africa's financial landscape as Co-founder and CEO of PiggyVest, Nigeria's leading digital savings and investment platform. Under his leadership, PiggyVest has grown from a simple savings app to a comprehensive financial ecosystem serving millions of users, demonstrating the massive potential of African fintech innovation.",
  },
  {
    src: "/images/home-team/2.svg",
    fullName: "Joshua Chibueze",
    role: "Partner",
    slug: "joshua-chibueze",
    bio: "Joshua Chibueze is transforming Africa's financial landscape as Co-founder and CEO of PiggyVest, Nigeria's leading digital savings and investment platform. Under his leadership, PiggyVest has grown from a simple savings app to a comprehensive financial ecosystem serving millions of users, demonstrating the massive potential of African fintech innovation.",
  },
  {
    src: "/images/home-team/3.svg",
    fullName: "Yvonne Momah ",
    role: "Operations",
    slug: "yvonne-momah",
    bio: "Yvonne Momah is transforming Africa's financial landscape as Co-founder and CEO of PiggyVest, Nigeria's leading digital savings and investment platform. Under her leadership, PiggyVest has grown from a simple savings app to a comprehensive financial ecosystem serving millions of users, demonstrating the massive potential of African fintech innovation.",
  },
  {
    src: "/images/home-team/4.svg",
    fullName: "Victoria Ekong",
    role: "Human Resources ",
    slug: "victoria-ekong",
    bio: "Victoria Ekong is transforming Africa's financial landscape as Co-founder and CEO of PiggyVest, Nigeria's leading digital savings and investment platform. Under her leadership, PiggyVest has grown from a simple savings app to a comprehensive financial ecosystem serving millions of users, demonstrating the massive potential of African fintech innovation.",
  },
  {
    src: "/images/home-team/5.svg",
    fullName: "Adio Azeez ",
    role: "Engineering",
    slug: "adio-azeez",
    bio: "Adio Azeez is transforming Africa's financial landscape as Co-founder and CEO of PiggyVest, Nigeria's leading digital savings and investment platform. Under his leadership, PiggyVest has grown from a simple savings app to a comprehensive financial ecosystem serving millions of users, demonstrating the massive potential of African fintech innovation.",
  },
  {
    src: "/images/home-team/6.svg",
    fullName: "Uzor Ezeh ",
    role: "Legal",
    slug: "uzor-ezeh",
    bio: "Uzor Ezeh is transforming Africa's financial landscape as Co-founder and CEO of PiggyVest, Nigeria's leading digital savings and investment platform. Under his leadership, PiggyVest has grown from a simple savings app to a comprehensive financial ecosystem serving millions of users, demonstrating the massive potential of African fintech innovation.",
  },
];
export default function HomeTeam() {
  return (
    <section className="relative bg-[#FFFFFF] mt-10 lg:mt-16 lg:py-40 py-20">
      <Image
        src="/images/home-team/arrow 1.svg"
        alt="arrow"
        width={300}
        height={374}
        className="absolute z-30 -top-20 md:-top-55 lg:left-0 -left-5 w-[132px] md:w-auto "
      />

      <h1 className="ml-6 md:ml-30 bg-[#E2F99C] !text-[20px] md:!text-[32px] lg:!text-[44px] font-semibold italic !leading-[20px] lg:!leading-[44px] !tracking-[-1.33px] rounded-[4px] lg:rounded-[8px] -rotate-[13deg]  w-fit pr-[6.209px] pb-[4.044px] pl-[5.997px] lg:!py-[4px] lg:!px-[12px] font-cormorant text-[#0C5752]">
        MeetThe Team{" "}
      </h1>
      <div className="md:px-[124px] pl-6  ">
        <Image
          src="/images/home-team.svg"
          alt="team"
          width={900}
          height={604}
          className="pr-20"
        />
        <div className="pt-[25px]">
          <h2 className="relative inset-0 z-10 md:text-[104px] text-[36px] font-semibold text-[#0C4642] md:leading-[115px] md:-tracking-[1.5%]">
            We are a bunch of
          </h2>
          <div className=" relative -top-4 bg-[#E2F99C] gap-[8px] shrink-0 inline-flex items-center justify-center md:py-[12px] px-[8px] md:py-[80px] md:pr-[24px] md:pl-[8px] lg:pr-[40px] lg:pl-[16px] bg-80CD75 lg:h-[136px] !rounded-[8px] md:!pb-[100px]">
            <h2 className="  text-[44px] md:text-[146.7px] text-[#0C4642] -tracking-[1.5%] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit ">
              proven makers & doers
            </h2>
          </div>
          <h2 className="relative inset-0 z-10 -top-14 md:text-[96px] text-[36px] -tracking-[1.5%] font-semibold text-[#0C4642] leading-[95px] md:leading-[115px]">
            working in service
          </h2>
          <h2 className="relative inset-0 z-10 -top-15 md:text-[96px] text-[36px] -tracking-[1.5%] font-semibold text-[#0C4642] leading-[1px] md:leading-[115px]">
            of our portfolio
          </h2>
          <Image
            src="/images/home-team/Vector.svg"
            alt="vector"
            width={69}
            height={70}
            className="relative lg:-top-40 lg:left-173 -top-[80px] left-[255px] w-[24px] md:w-auto"
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 w-[384px] md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-6 md:w-auto md:max-w-[1440px]">
          {members.map((member, ind) => (
            <Link
              href={`/about-us/${member.slug}`}
              className="bg-[#F7F9FC] rounded-[12px] shadow-sm"
              key={ind}
            >
              <div className="relative h-[514px] m-[4px] px-1">
                <Image
                  src={member.src}
                  alt={member.fullName}
                  width={376}
                  height={434}
                  className="w-[376px] h-[434px] object-cover object-center rounded-[12px] mx-auto"
                />
                <div className="text-[12px] md:text-[16px]">
                  <p className="mx-4 my-4 ">
                    {member.fullName} <br />
                    <span className="font-bold">{member.role}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
