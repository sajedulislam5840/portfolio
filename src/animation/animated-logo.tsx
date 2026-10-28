import Link from "next/link";

export default function AnimatedLogo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent font-mono text-lg font-bold text-white shadow-md transition-transform group-hover:scale-105">
        SI
      </span>
      <span className="font-mono text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
        Sajedul Islam
      </span>
    </Link>
  );
}
