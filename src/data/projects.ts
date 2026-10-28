export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AZS: The Catalyst",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolio.webp"],
    description:
      "A production-ready EdTech platform unifying curriculum sequencing, batch management, and subscription tracking with an integrated AI tutor.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
    liveWebsiteHref: "https://vercel.com",
  },
  {
    name: "Retail Intelligence Engine",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolio.webp"],
    description:
      "Enterprise multi-source ETL analytics pipeline transforming retail logs into Medallion (Raw to Silver to Gold) architecture.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
  {
    name: "Career Switch Prediction",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolio.webp"],
    description:
      "Classification pipeline tackling class imbalance with class-weighted loss, evaluated on 5,000 profiles via Stratified 5-Fold CV.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
  {
    name: "SparkEnergies Billing",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolio.webp"],
    description:
      "Utility billing engine on a 3NF normalized schema with double-entry safety for prepaid balances and 6-month usage analytics.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
];

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "AZS: The Catalyst",
    href: "/projects",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: {
      LIGHT: "/images/projects/portfolio.webp",
      DARK: "/images/projects/portfolio.webp",
    },
  },
  {
    index: 1,
    title: "Retail Intelligence Engine",
    href: "/projects",
    tags: ["ETL", "Python", "SQL", "Medallion Architecture"],
    image: {
      LIGHT: "/images/projects/portfolio.webp",
      DARK: "/images/projects/portfolio.webp",
    },
  },
];

export const PROJECT_SHOWCASE_LIST = PROJECTS_CARD;
export const projects = PROJECTS_CARD;
export default PROJECTS_CARD;
