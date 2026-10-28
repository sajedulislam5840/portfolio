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
    name: "Retail Intelligence Engine",
    favicon: "",
    imageUrl: [],
    description:
      "Enterprise multi-source ETL analytics pipeline transforming retail logs into Medallion (Raw to Silver to Gold) architecture.",
    sourceCodeHref: "https://github.com/sajedulislam5840/amazon-sales-etl-pipeline",
  },
  {
    name: "Career Switch Prediction",
    favicon: "",
    imageUrl: [],
    description:
      "Classification pipeline tackling class imbalance with class-weighted loss, evaluated on 5,000 profiles via Stratified 5-Fold CV.",
    sourceCodeHref: "https://github.com/sajedulislam5840/CSE422",
  },
  {
    name: "SparkEnergies Billing",
    favicon: "",
    imageUrl: [],
    description:
      "Utility billing engine on a 3NF normalized schema with double-entry safety for prepaid balances and 6-month usage analytics.",
    sourceCodeHref: "https://github.com/sajedulislam5840/CSE370",
  },
];

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "RISC-V Edge AI Acceleration",
    href: "/projects",
    tags: ["RISC-V", "Edge AI", "Computer Architecture", "Hardware-Software Co-Design"],
    image: {
      LIGHT: "/images/projects/riscv-architecture.png",
      DARK: "/images/projects/riscv-architecture.png",
    },
  },
  {
    index: 1,
    title: "AZS: The Catalyst",
    href: "/projects",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: {
      LIGHT: "/images/projects/catalyst-hero.png",
      DARK: "/images/projects/catalyst-hero.png",
    },
  },
  {
    index: 2,
    title: "Retail Intelligence Engine",
    href: "/projects",
    tags: ["ETL", "Python", "SQL", "Medallion"],
    image: {
      LIGHT: "",
      DARK: "",
    },
  },
  {
    index: 3,
    title: "Career Switch Prediction",
    href: "/projects",
    tags: ["Machine Learning", "Scikit-Learn", "Python"],
    image: {
      LIGHT: "",
      DARK: "",
    },
  },
];

export const PROJECT_SHOWCASE_LIST = PROJECTS_CARD;
export const projects = PROJECTS_CARD;
export default PROJECTS_CARD;
