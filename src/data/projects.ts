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
    favicon: "",
    imageUrl: [
      "/images/projects/catalyst-hero.png",
      "/images/projects/catalyst-dashboard.png",
      "/images/projects/catalyst-signin.png",
      "/images/projects/catalyst-register.png",
    ],
    description:
      "A production-ready EdTech platform unifying curriculum sequencing, batch management, and subscription tracking with an integrated AI tutor.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
    liveWebsiteHref: "https://azs-the-catalyst.vercel.app",
  },
  {
    name: "Retail Intelligence Engine",
    favicon: "",
    imageUrl: ["/images/projects/catalyst-hero.png"],
    description:
      "Enterprise multi-source ETL analytics pipeline transforming retail logs into Medallion (Raw to Silver to Gold) architecture.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
  {
    name: "Career Switch Prediction",
    favicon: "",
    imageUrl: ["/images/projects/catalyst-dashboard.png"],
    description:
      "Classification pipeline tackling class imbalance with class-weighted loss, evaluated on 5,000 profiles via Stratified 5-Fold CV.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
  {
    name: "SparkEnergies Billing",
    favicon: "",
    imageUrl: ["/images/projects/catalyst-signin.png"],
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
      LIGHT: "/images/projects/catalyst-hero.png",
      DARK: "/images/projects/catalyst-hero.png",
    },
  },
  {
    index: 1,
    title: "Retail Intelligence Engine",
    href: "/projects",
    tags: ["ETL", "Python", "SQL", "Medallion"],
    image: {
      LIGHT: "/images/projects/catalyst-dashboard.png",
      DARK: "/images/projects/catalyst-dashboard.png",
    },
  },
  {
    index: 2,
    title: "Career Switch Prediction",
    href: "/projects",
    tags: ["Machine Learning", "Scikit-Learn", "Python"],
    image: {
      LIGHT: "/images/projects/catalyst-signin.png",
      DARK: "/images/projects/catalyst-signin.png",
    },
  },
  {
    index: 3,
    title: "SparkEnergies Billing",
    href: "/projects",
    tags: ["Database", "SQL", "3NF Schema"],
    image: {
      LIGHT: "/images/projects/catalyst-register.png",
      DARK: "/images/projects/catalyst-register.png",
    },
  },
];

export const PROJECT_SHOWCASE_LIST = PROJECTS_CARD;
export const projects = PROJECTS_CARD;
export default PROJECTS_CARD;
