import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
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
        name: "SQL",
        icon: TbSql,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },
  {
    sectionName: "Data Science & Machine Learning",
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
    sectionName: "Web & Development Tools",
    skills: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "VS Code",
        icon: SiVisualstudiocode,
      },
    ],
  },
];

export default SKILLS_DATA;
