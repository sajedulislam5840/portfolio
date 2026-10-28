export interface EducationShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description?: string;
}

export const EDUCATION_LIST: EducationShowcaseListItemProps[] = [
  {
    title: "BSc in Computer Science and Engineering",
    organisation: {
      name: "BRAC University",
      href: "https://www.bracu.ac.bd",
    },
    date: "Undergraduate",
    location: "Dhaka, Bangladesh",
    description:
      "Core coursework in Artificial Intelligence, Operating Systems, Computer Architecture (RISC-V), Numerical Methods, Database Systems, and Digital Logic Design.",
  },
];
