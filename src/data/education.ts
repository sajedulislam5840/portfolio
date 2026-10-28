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

const EDUCATION_DATA: EducationShowcaseListItemProps[] = [
  {
    title: "BSc in Computer Science and Engineering",
    organisation: {
      name: "BRAC University",
      href: "https://www.bracu.ac.bd",
    },
    date: "Undergraduate",
    location: "Dhaka, Bangladesh",
    description:
      "Specializing in Machine Learning, Artificial Intelligence, Operating Systems, Computer Architecture, Database Systems, and Algorithms.",
  },
  {
    title: "Higher Secondary Certificate (HSC) — Science (GPA 5.00 / 5.00)",
    organisation: {
      name: "Government Science College",
      href: "https://gsc.edu.bd",
    },
    date: "2020 – 2022",
    location: "Tejgaon, Dhaka, Bangladesh",
    description:
      "Graduated with GPA 5.00 in Science. Served as Cadet Corporal (Cadet No: 20111051) in the Government Science College BNCC Platoon; successfully completed Battalion Camping 2022. Multi-award winner in college athletics including 100-meter sprint and high jump.",
  },
  {
    title: "Secondary School Certificate (SSC) — Science (GPA 5.00 / 5.00)",
    organisation: {
      name: "Adamjee Cantonment Public School",
      href: "https://acps.edu.bd",
    },
    date: "2018 – 2020",
    location: "Dhaka Cantonment, Dhaka, Bangladesh",
    description:
      "Graduated with GPA 5.00 in Science. Active cadet in School BNCC Platoon; successfully completed the Annual Training Exercise 01/2015.",
  },
];

export const EDUCATION = EDUCATION_DATA;
export const EDUCATION_LIST = EDUCATION_DATA;
export const educations = EDUCATION_DATA;
export default EDUCATION_DATA;
