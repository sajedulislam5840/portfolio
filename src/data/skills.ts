import {
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";
import { FaJava, FaPhp } from "react-icons/fa";
import { SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "PHP",
        icon: FaPhp,
      },
    ],
  },
  {
    sectionName: "Data & Machine Learning",
    skills: [
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
      },
      {
        name: "Scikit-Learn",
        icon: SiScikitlearn,
      },
    ],
  },
  {
    sectionName: "Frameworks & Databases",
    skills: [
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
];

export default SKILLS_DATA;
