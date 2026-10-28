import React from "react";

export interface SkillPillProps {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const BRAND_COLORS: Record<string, string> = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  Java: "#ED8B00",
  "C++": "#00599C",
  PHP: "#777BB4",
  Pandas: "#150458",
  NumPy: "#013243",
  "Scikit-Learn": "#F7931E",
  FastAPI: "#009688",
  "Next.js": "#000000",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  "Tailwind CSS": "#06B6D4",
  Git: "#F05032",
  "VS Code": "#007ACC",
  SQL: "#336791",
};

export default function SkillsPill({ name, icon: Icon }: SkillPillProps) {
  const iconColor = BRAND_COLORS[name] || "#0D9488";

  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="flex h-6 w-6 items-center justify-center text-2xl" style={{ color: iconColor }}>
        <Icon style={{ color: iconColor }} />
      </div>
      <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
        {name}
      </span>
    </div>
  );
}
