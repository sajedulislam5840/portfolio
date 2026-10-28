export interface ProjectProps {
  name: string;
  favicon: string;
  imageUrl: string;
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export const PROJECT_SHOWCASE_LIST: ProjectProps[] = [
  {
    name: "AZS: The Catalyst",
    favicon: "/favicon.ico",
    imageUrl: "/static/images/hero.webp",
    description:
      "A production-ready EdTech platform unifying curriculum sequencing, batch management, and subscription tracking with an integrated AI tutor.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
    liveWebsiteHref: "https://vercel.com",
  },
  {
    name: "Retail Intelligence Engine",
    favicon: "/favicon.ico",
    imageUrl: "/static/images/hero.webp",
    description:
      "Enterprise multi-source ETL analytics pipeline transforming retail logs into Medallion (Raw → Silver → Gold) architecture.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
  {
    name: "Career Switch Prediction",
    favicon: "/favicon.ico",
    imageUrl: "/static/images/hero.webp",
    description:
      "Classification pipeline tackling class imbalance with class-weighted loss, evaluated on 5,000 profiles via Stratified 5-Fold CV.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
  {
    name: "SparkEnergies Billing",
    favicon: "/favicon.ico",
    imageUrl: "/static/images/hero.webp",
    description:
      "Utility billing engine on a 3NF normalized schema with double-entry safety for prepaid balances and 6-month usage analytics.",
    sourceCodeHref: "https://github.com/sajedulislam5840",
  },
];
