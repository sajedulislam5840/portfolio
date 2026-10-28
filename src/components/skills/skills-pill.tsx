import React from "react";

export interface SkillPillProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function SkillsPill({ name, icon: Icon }: SkillPillProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="flex h-6 w-6 items-center justify-center text-xl">
        <Icon />
      </div>
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {name}
      </span>
    </div>
  );
}
