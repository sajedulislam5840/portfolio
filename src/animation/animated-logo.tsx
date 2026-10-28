import Link from "next/link";

export default function AnimatedLogo() {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-mono text-xl font-bold text-white shadow-md transition-transform group-hover:scale-105">
        SI
      </span>
      <span className="hidden font-mono text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-200 sm:inline-block">
        Sajedul Islam
      </span>
    </Link>
  );
}
