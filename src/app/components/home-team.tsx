import Image from "next/image";
import Link from "next/link";

export default function HomeTeam() {
  const members = [
    {
      src: "/images/home-team/1.svg",
      fullName: "Somto Ifezue",
      role: "CEO",
    },
    {
      src: "/images/home-team/2.svg",
      fullName: "Somto Ifezue",
      role: "CEO",
    },
    {
      src: "/images/home-team/3.svg",
      fullName: "Somto Ifezue",
      role: "CEO",
    },
    {
      src: "/images/home-team/4.svg",
      fullName: "Somto Ifezue",
      role: "CEO",
    },
    {
      src: "/images/home-team/5.svg",
      fullName: "Somto Ifezue",
      role: "CEO",
    },
    {
      src: "/images/home-team/6.svg",
      fullName: "Somto Ifezue",
      role: "CEO",
    },
  ];
  return (
    <section className="mt-[192.8px] bg-[#FFFFFF]">
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
            <h2
              className="  text-[44px] md:text-[146.7px] text-[#0C4642] -tracking-[1.5%] md:-tracking-[7.88px] font-medium italic font-cormorant w-fit "
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              proven makers & doers
            </h2>
          </div>
          <h2 className="relative inset-0 z-10 -top-14 md:text-[96px] text-[36px] -tracking-[1.5%] font-semibold text-[#0C4642] leading-[95px] md:leading-[115px]">
            working in service
          </h2>
          <h2 className="relative inset-0 z-10 -top-14 md:text-[96px] text-[36px] -tracking-[1.5%] font-semibold text-[#0C4642] leading-[0px] md:leading-[115px]">
            of our portfolio
          </h2>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 w-[384px] md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-6 md:w-auto md:max-w-[1440px]">
          {members.map((member, ind) => (
            <Link
              href={`/our-team/${member.biolink}`}
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
