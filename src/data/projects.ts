export interface ProjectCardProps {
  name: string;
  category?: "Featured" | "More Projects";
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AZS: The Catalyst",
    category: "Featured",
    favicon: "",
    imageUrl: [
      "/images/projects/catalyst-hero.png",
      "/images/projects/catalyst-dashboard.png",
      "/images/projects/catalyst-signin.png",
      "/images/projects/catalyst-register.png",
    ],
    description:
      "EdTech platform providing unified curriculum sequencing, batch management, and fee tracking with an integrated AI tutor. Built for A.Z.S. Science Care academic cohorts. Stack: Next.js, React, Tailwind CSS, Framer Motion.",
    sourceCodeHref: "https://github.com/sajedulislam5840/AZS-The-Catalyst",
    liveWebsiteHref: "https://azs-the-catalyst.vercel.app",
  },
  {
    name: "Career Switch Prediction",
    category: "Featured",
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
      "Tabular ML classification pipeline evaluating career transition intent across 5,000 professional records. Addressed class imbalance using class-weighted penalties and validated via Stratified 5-Fold Cross Validation. Stack: Python, Scikit-Learn, Pandas.",
    sourceCodeHref: "https://github.com/sajedulislam5840/CSE422",
  },
  {
    name: "SparkEnergies Billing",
    category: "Featured",
    favicon: "",
    imageUrl: [
      "/images/projects/sparkenergies-1.png",
      "/images/projects/sparkenergies-2.png",
      "/images/projects/sparkenergies-3.png",
      "/images/projects/sparkenergies-4.png",
      "/images/projects/sparkenergies-5.png",
    ],
    description:
      "Utility billing and balance management engine built on a normalized 3NF relational schema. Implements double-entry ledger validation to prevent prepaid balance discrepancy, paired with monthly usage analytics. Stack: PHP, MySQL.",
    sourceCodeHref: "https://github.com/sajedulislam5840/CSE370",
  },
  {
    name: "RISC-V Edge AI Acceleration",
    category: "Featured",
    favicon: "",
    imageUrl: [
      "/images/projects/riscv-architecture.png",
      "/images/projects/riscv-benchmark.png",
    ],
    description:
      "Research prototype studying hardware-software co-design on RISC-V architectures. Analyzes custom instruction sets and low-precision quantized ML inference pipelines on resource-constrained compute nodes.",
    sourceCodeHref: "https://github.com/sajedulislam5840/riscv-edge-ai",
  },
  {
    name: "Retail Intelligence Engine",
    category: "More Projects",
    favicon: "",
    imageUrl: [],
    description:
      "Multi-source ETL pipeline transforming transactional retail data into a Medallion data lake architecture (Raw to Silver to Gold) with automated data cleaning and aggregated reporting views. Stack: Python, SQL, Pandas.",
    sourceCodeHref: "https://github.com/sajedulislam5840/amazon-sales-etl-pipeline",
  },
  {
    name: "My Portfolio",
    category: "More Projects",
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
      "Personal portfolio platform engineered with Next.js, React, and Tailwind CSS. Features dynamic project showcases, responsive image carousels, and automated Vercel CI/CD deployments. Stack: Next.js, TypeScript, Tailwind CSS.",
    sourceCodeHref: "https://github.com/sajedulislam5840/portfolio",
    liveWebsiteHref: "https://sajedul-islam-portfolio.vercel.app",
  },
];

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "AZS: The Catalyst",
    href: "/projects",
    tags: ["Next.js", "React", "EdTech", "Tailwind CSS"],
    image: {
      LIGHT: "/images/projects/catalyst-hero.png",
      DARK: "/images/projects/catalyst-hero.png",
    },
  },
  {
    index: 1,
    title: "Career Switch Prediction",
    href: "/projects",
    tags: ["Machine Learning", "Scikit-Learn", "Stratified CV", "Python"],
    image: {
      LIGHT: "/images/projects/career-switch-1.png",
      DARK: "/images/projects/career-switch-1.png",
    },
  },
  {
    index: 2,
    title: "SparkEnergies Billing",
    href: "/projects",
    tags: ["Database Systems", "MySQL", "3NF Normalization", "PHP"],
    image: {
      LIGHT: "/images/projects/sparkenergies-1.png",
      DARK: "/images/projects/sparkenergies-1.png",
    },
  },
  {
    index: 3,
    title: "RISC-V Edge AI Acceleration",
    href: "/projects",
    tags: ["RISC-V", "Edge AI", "Computer Architecture", "Systems"],
    image: {
      LIGHT: "/images/projects/riscv-architecture.png",
      DARK: "/images/projects/riscv-architecture.png",
    },
  },
];

export const PROJECT_SHOWCASE_LIST = PROJECTS_CARD;
export const projects = PROJECTS_CARD;
export default PROJECTS_CARD;
