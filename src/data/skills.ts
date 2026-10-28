import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiScikitlearn,
  SiGit,
  SiLinux,
  SiPhp,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export interface SkillItem {
  name: string;
  icon: any;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages & Systems",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "C / C++", icon: VscCode },
      { name: "RISC-V", icon: VscCode },
    ],
  },
  {
    title: "Frameworks & Web",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases & ML",
    skills: [
      { name: "MySQL (3NF)", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Scikit-Learn", icon: SiScikitlearn },
    ],
  },
  {
    title: "Tools & Architectures",
    skills: [
      { name: "Git & GitHub", icon: SiGit },
      { name: "Linux / Bash", icon: SiLinux },
    ],
  },
];
