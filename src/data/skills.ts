import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPhp,
} from "react-icons/si";
import { FiCpu, FiCode, FiTerminal } from "react-icons/fi";

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
      { name: "C / C++", icon: FiCode },
      { name: "RISC-V", icon: FiCpu },
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
      { name: "Machine Learning", icon: FiCpu },
    ],
  },
  {
    title: "Tools & Architectures",
    skills: [
      { name: "Git & GitHub", icon: SiGit },
      { name: "Linux / Bash", icon: FiTerminal },
    ],
  },
];
