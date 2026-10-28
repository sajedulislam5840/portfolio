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
    name: "My Portfolio",
    favicon: "",
    imageUrl: [
      "/images/projects/portfolio-1.png",
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-3.png",
      "/images/projects/portfolio-4.png",
      "/images/projects/portfolio-5.png",
      "/images/projects/portfolio-6.png",
    ],
    description:
      "Modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Includes dynamic project catalogs, verified credential showcases, dark/light theme switching, and optimized Vercel CI/CD deployment.",
    sourceCodeHref: "https://github.com/sajedulislam5840/portfolio",
    liveWebsiteHref: "https://sajedul-islam-portfolio.vercel.app",
  },
  {
    name: "RISC-V Edge AI Acceleration",
    favicon: "",
    imageUrl: [
      "/images/projects/riscv-architecture.png",
      "/images/projects/riscv-benchmark.png",
    ],
    description:
      "Hardware-software co-design research exploring custom RISC-V instruction extensions and quantized ML inference pipelines optimized for resource-constrained edge systems.",
    sourceCodeHref: "https://github.com/sajedulislam5840/riscv-edge-ai",
  },
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
    sourceCodeHref: "https://github.com/sajedulislam5840/AZS-The-Catalyst",
    liveWebsiteHref: "https://azs-the-catalyst.vercel.app",
  },
  {
    name: "Career Switch Prediction",
    favicon: "",
    imageUrl: [
      "/images/projects/career-switch-1.png",
      "/images/projects/career-switch-2.png",
      "/images/projects/career-switch-3.png",
      "/images/projects/career-switch-4.png",
      "/images/projects/career-switch-5.png",
      "/images/projects/career-switch-6.png",
      "/images/projects/career-switch-7.png",
      "/images/projects/career-switch-8.png",
      "/images/projects/career-switch-9.png",
      "/images/projects/career-switch-10.png",
      "/images/projects/career-switch-11.png",
      "/images/projects/career-switch-12.png",
      "/images/projects/career-switch-13.png",
      "/images/projects/career-switch-14.png",
      "/images/projects/career-switch-15.png",
    ],
    description:
      "Classification pipeline tackling class imbalance with class-weighted loss, evaluated on 5,000 profiles via Stratified 5-Fold CV.",
    sourceCodeHref: "https://github.com/sajedulislam5840/CSE422",
  },
  {
    name: "SparkEnergies Billing",
    favicon: "",
    imageUrl: [
      "/images/projects/sparkenergies-1.png",
      "/images/projects/sparkenergies-2.png",
      "/images/projects/sparkenergies-3.png",
      "/images/projects/sparkenergies-4.png",
      "/images/projects/sparkenergies-5.png",
    ],
    description:
      "Utility billing engine on a 3NF normalized schema with double-entry safety for prepaid balances and 6-month usage analytics.",
    sourceCodeHref: "https://github.com/sajedulislam5840/CSE370",
  },
  {
    name: "Retail Intelligence Engine",
    favicon: "",
    imageUrl: [],
    description:
      "Enterprise multi-source ETL analytics pipeline transforming retail logs into Medallion (Raw to Silver to Gold) architecture.",
    sourceCodeHref: "https://github.com/sajedulislam5840/amazon-sales-etl-pipeline",
  },
];

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "My Portfolio",
    href: "/projects",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: {
      LIGHT: "/images/projects/portfolio-1.png",
      DARK: "/images/projects/portfolio-1.png",
    },
  },
  {
    index: 1,
    title: "RISC-V Edge AI Acceleration",
    href: "/projects",
    tags: ["RISC-V", "Edge AI", "Computer Architecture", "Hardware-Software Co-Design"],
    image: {
      LIGHT: "/images/projects/riscv-architecture.png",
      DARK: "/images/projects/riscv-architecture.png",
    },
  },
  {
    index: 2,
    title: "AZS: The Catalyst",
    href: "/projects",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: {
      LIGHT: "/images/projects/catalyst-hero.png",
      DARK: "/images/projects/catalyst-hero.png",
    },
  },
  {
    index: 3,
    title: "Career Switch Prediction",
    href: "/projects",
    tags: ["Machine Learning", "Scikit-Learn", "Python"],
    image: {
      LIGHT: "/images/projects/career-switch-1.png",
      DARK: "/images/projects/career-switch-1.png",
    },
  },
  {
    index: 4,
    title: "SparkEnergies Billing",
    href: "/projects",
    tags: ["Database", "SQL", "3NF Schema", "PHP"],
    image: {
      LIGHT: "/images/projects/sparkenergies-1.png",
      DARK: "/images/projects/sparkenergies-1.png",
    },
  },
];

export const PROJECT_SHOWCASE_LIST = PROJECTS_CARD;
export const projects = PROJECTS_CARD;
export default PROJECTS_CARD;
