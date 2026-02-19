import Image from "next/image";
import Link from "next/link";

const ImageCardProps = [
  {
    title: "Outside",
    description:
      "Outside is a mobile app and platform that helps urban professionals discover and book verified entertainment experiences. From concerts and comedy shows to restaurants and nightclubs, users can securely book, earn rewards, and enjoy curated experiences all in one place.",
    whiteLogo: "images/invest/outside.svg",
    imageUrl: "images/portfolio/bg1.svg",
    width: 112,
    logoWidth: 225.78,
    logoHeight: 48,
    slug: "/outside",
    industry: "Hospitality & Tourism",
  },
  {
    title: "Partyvest",
    description:
      "Partyvest is an all-in-one event planning platform that takes the stress out of organizing celebrations. The app helps users find verified vendors, manage budgets, coordinate with guests, and handle gifts and contributions, all while allowing them to save for their special occasions with interest-earning features. ",
    whiteLogo: "images/invest/partyvest.svg",
    imageUrl: "images/portfolio/top.svg",
    width: 130.09,
    logoWidth: 247.21,
    logoHeight: 44,
    slug: "/partyvest",
    industry: "Event Management & Planning",
  },
  {
    title: "CAST",
    description:
      "CAST is a digital platform that connects Nigeria's film industry talent, making collaboration easier and more transparent. The app helps actors showcase their work through digital portfolios, enables producers to find the right talent, and allows investors to fund and track film projects seamlessly.",
    whiteLogo: "images/invest/cast.svg",
    imageUrl: "images/portfolio/castBg.svg",
    width: 86.67,
    logoWidth: 182,
    logoHeight: 52,
    slug: "/cast",
    industry: "Entertainment & Film",
  },
  {
    title: "DriveWell",
    description:
      "DriveWell simplifies car ownership in Nigerian cities through certified vehicle sales, trusted maintenance services, and flexible payment options. The app connects users with qualified mechanics, offers instalment payment plans for car purchases, and ensures peace of mind for vehicle owners.",
    whiteLogo: "images/invest/drivewell-black.svg",
    imageUrl: "images/portfolio/driveWellBg.svg",
    width: 148.95,
    logoWidth: 312.63,
    logoHeight: 52,
    slug: "/drivewell",
    industry: "Automotive & Technology",
  },
];

export default function ImageCard() {
  return (
    <section className="relative px-4 pt-[22.27px]">
      <div className="flex flex-col items-center gap-16 lg:pb-[116px] pb-[68.33px]">
        <Image
          src="images/portfolio/pink-star.svg"
          alt="pink-stars"
          width={101}
          height={102}
          className="absolute -top-[63px] md:left-[30%] left-[10%]  object-contain "
        />
        <Image
          src="images/portfolio/star.svg"
          alt="pink-stars"
          width={56}
          height={56}
          className="absolute -top-[25px] left-[40%]  object-contain "
        />
        {ImageCardProps.map((item) => (
          <div className="lg:w-[1200px] lg:h-[547px] w-[330px] h-[410px] lg:rounded-[20px] rounded-[20px] overflow-hidden shadow-sm z-10">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={1200}
              height={180}
              className="object-cover h-[80px] md:h-[180px]"
            />

            <div className="bg-[#FFFFFF] relative lg:-top-12 lg:left-14 -top-6 left-6 w-fit lg:px-5 lg:py-4 lg:rounded-[8px] rounded-[4px] px-[10px] py-2">
              <Image
                src={item.whiteLogo}
                alt={item.title}
                width={item.logoWidth}
                height={item.logoHeight}
                style={
                  { "--logo-width": `${item.width}px` } as React.CSSProperties
                }
                className="w-[var(--logo-width)] md:w-auto z-10"
              />
            </div>
            <p className="lg:px-14 px-6 text-[14px] lg:text-[26.7px] leading-[180%] tracking-[-0.28px] tracking-[-0.53px] lg:-mt-10">
              {item.description}
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-14 lg:py-10 py-6 px-6">
              <p className="text-[14px] lg:text-[26.7px]">
                <span className="text-[#4F584FB2]">Industry: {""}</span>
                {item.industry}
              </p>
              <Link
                className=" flex text-[14px] lg:text-[26.7px] font-semibold underline text-[#0C4642]"
                href={item.slug}
              >
                Go to Website{" "}
                <Image
                  src="images/portfolio/ArrowNarrowUpOutline.svg"
                  alt="arrow"
                  width={36}
                  height={36}
                  className="w-[24px] md:w-auto"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
