export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages & Systems",
    skills: [
      { name: "Python" },
      { name: "C / C++" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "RISC-V Assembly" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frameworks & Web",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    title: "Databases & ML",
    skills: [
      { name: "MySQL (3NF)" },
      { name: "PostgreSQL" },
      { name: "Scikit-Learn" },
      { name: "Pandas & NumPy" },
      { name: "Data Modeling" },
    ],
  },
  {
    title: "Tools & Architectures",
    skills: [
      { name: "Git & GitHub" },
      { name: "Linux / Bash" },
      { name: "RISC-V Toolchain / Spike Simulator" },
      { name: "Vercel CI/CD" },
    ],
  },
];
