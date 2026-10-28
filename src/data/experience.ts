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

const EXPERIENCES_DATA: ExperienceShowcaseListItemProps[] = [
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

export const EXPERIENCE = EXPERIENCES_DATA;
export const EXPERIENCE_LIST = EXPERIENCES_DATA;
export const EXPERIENCES = EXPERIENCES_DATA;
export const experiences = EXPERIENCES_DATA;
export default EXPERIENCES_DATA;
