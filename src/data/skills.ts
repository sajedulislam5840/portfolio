import { SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Python",
        icon: "/icons/python.svg",
      },
      {
        name: "SQL",
        icon: "/icons/sql.svg",
      },
      {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
      },
      {
        name: "Java",
        icon: "/icons/java.svg",
      },
      {
        name: "C++",
        icon: "/icons/cpp.svg",
      },
      {
        name: "PHP",
        icon: "/icons/php.svg",
      },
    ],
  },
  {
    sectionName: "Data & Machine Learning",
    skills: [
      {
        name: "Pandas",
        icon: "/icons/pandas.svg",
      },
      {
        name: "NumPy",
        icon: "/icons/numpy.svg",
      },
      {
        name: "Scikit-Learn",
        icon: "/icons/scikit-learn.svg",
      },
      {
        name: "Matplotlib",
        icon: "/icons/matplotlib.svg",
      },
    ],
  },
  {
    sectionName: "Frameworks & Databases",
    skills: [
      {
        name: "FastAPI",
        icon: "/icons/fastapi.svg",
      },
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
      },
      {
        name: "MySQL",
        icon: "/icons/mysql.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
      },
    ],
  },
];

export default SKILLS_DATA;
