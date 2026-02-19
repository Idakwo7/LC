type PortfolioItem = {
  id: number;
  title: string;
  whiteLogo: string;
  description: string;
  imageUrl: string;
  industry: string;
  slug: string;
};

// Mock data - replace with your actual data source
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Fintech Innovation Platform",
    description:
      "A revolutionary platform transforming digital payments across Africa with blockchain technology.",
    whiteLogo: "/images/portfolio/fintech-white.svg",
    imageUrl: "/images/portfolio/fintech.jpg", // Replace with your image path
    industry: "Fintech",
    slug: "fintech-innovation",
  },
  {
    id: 1,
    title: "Fintech Innovation Platform",
    description:
      "A revolutionary platform transforming digital payments across Africa with blockchain technology.",
    whiteLogo: "/images/portfolio/fintech-white.svg",
    imageUrl: "/images/portfolio/fintech.jpg", // Replace with your image path
    industry: "Fintech",
    slug: "fintech-innovation",
  },
  {
    id: 1,
    title: "Fintech Innovation Platform",
    description:
      "A revolutionary platform transforming digital payments across Africa with blockchain technology.",
    whiteLogo: "/images/portfolio/fintech-white.svg",
    imageUrl: "/images/portfolio/fintech.jpg", // Replace with your image path
    industry: "Fintech",
    slug: "fintech-innovation",
  },
  // Add more portfolio items as needed
];
