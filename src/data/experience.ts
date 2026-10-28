export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description?: string[];
}

export const EXPERIENCE_LIST: ExperienceShowcaseListItemProps[] = [
  {
    title: "Data Preparation Specialist Intern",
    organisation: {
      name: "DataSynthis",
      href: "https://github.com/sajedulislam5840",
    },
    date: "Internship",
    location: "Remote",
    description: [
      "Engineered high-throughput data validation, schema auditing, and Medallion (Raw-Silver-Gold) deduplication pipelines.",
      "Ensured zero-loss reporting integrity and transformed raw datasets into clean, analytics-ready engines for downstream BI.",
    ],
  },
];
