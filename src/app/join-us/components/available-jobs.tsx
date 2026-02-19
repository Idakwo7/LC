export interface AvailableJobsProps {
  jobType: string;
  jobLevel: string;
  jobLocation: string;
  datePosted: string;
  jobDescription: string;
  logo: string;
}

export const AvailableJobs: AvailableJobsProps[] = [
  {
    jobType: "Lead Capital",
    jobLevel: "Entry-level",
    jobLocation: "Nigeria",
    datePosted: "2025-09-21",
    jobDescription: "Product Marketing Manager (Contract)",
    logo: "/images/join-us/livecapital.svg",
  },
  {
    jobType: "Drivewell",
    jobLevel: "Entry-level",
    jobLocation: "Nigeria",
    datePosted: "2025-09-21",
    jobDescription: "Product Marketing Manager (Contract)",
    logo: "images/join-us/drivewell.svg",
  },
  {
    jobType: "Lead Capital",
    jobLevel: "Entry-level",
    jobLocation: "Nigeria",
    datePosted: "2025-09-21",
    jobDescription: "Product Marketing Manager (Contract)",
    logo: "images/join-us/livecapital.svg",
  },
];
