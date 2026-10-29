export interface ProjectCardProps {
  name: string;
  category?: "Featured" | "More Projects";
  favicon: string;
  imageUrl: string[];
  description: string;
  result?: string;
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
      "EdTech cohort management and curriculum delivery engine with an integrated AI tutor. Built for A.Z.S. Science Care academic cohorts.",
    result: "Live product serving 40+ students with automated progress tracking.",
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
    ],
    description:
      "Tabular classification model evaluating transition intent across 5,000 professional profiles. Optimized for Recall using class-weighted penalties.",
    result: "Achieved 84% recall using Stratified 5-Fold Cross Validation.",
    sourceCodeHref: "https://github.com/sajedulislam5840/career-switch-prediction",
  },
  {
    name: "SparkEnergies Billing",
    category: "Featured",
    favicon: "",
    imageUrl: [
      "/images/projects/sparkenergies-1.png",
      "/images/projects/sparkenergies-2.png",
    ],
    description:
      "Utility billing engine built on a normalized 3NF relational schema with ACID-compliant double-entry ledger validation.",
    result: "Guarantees zero balance discrepancy under concurrent transactions.",
    sourceCodeHref: "https://github.com/sajedulislam5840/sparkenergies-billing",
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
      "Research prototype benchmarking custom instruction set extensions and INT8 quantized matrix multiplication on a Spike simulator.",
    result: "Analyzed compute-to-memory trade-offs for edge inferencing nodes.",
    sourceCodeHref: "https://github.com/sajedulislam5840/riscv-edge-ai",
  },
];

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "AZS: The Catalyst",
    href: "https://azs-the-catalyst.vercel.app",
    tags: ["Next.js", "React", "Live EdTech", "Tailwind CSS"],
    image: {
      LIGHT: "/images/projects/catalyst-hero.png",
      DARK: "/images/projects/catalyst-hero.png",
    },
  },
  {
    index: 1,
    title: "Career Switch Prediction",
    href: "https://github.com/sajedulislam5840/career-switch-prediction",
    tags: ["Machine Learning", "Stratified CV", "Python", "Scikit-Learn"],
    image: {
      LIGHT: "/images/projects/career-switch-1.png",
      DARK: "/images/projects/career-switch-1.png",
    },
  },
  {
    index: 2,
    title: "SparkEnergies Billing",
    href: "https://github.com/sajedulislam5840/sparkenergies-billing",
    tags: ["3NF Schema", "Double-Entry Ledger", "MySQL", "PHP"],
    image: {
      LIGHT: "/images/projects/sparkenergies-1.png",
      DARK: "/images/projects/sparkenergies-1.png",
    },
  },
  {
    index: 3,
    title: "RISC-V Edge AI Acceleration",
    href: "https://github.com/sajedulislam5840/riscv-edge-ai",
    tags: ["Computer Architecture", "Quantized ML", "RISC-V", "Systems"],
    image: {
      LIGHT: "/images/projects/riscv-architecture.png",
      DARK: "/images/projects/riscv-architecture.png",
    },
  },
];

export const PROJECT_SHOWCASE_LIST = PROJECTS_CARD;
export const projects = PROJECTS_CARD;
export default PROJECTS_CARD;
