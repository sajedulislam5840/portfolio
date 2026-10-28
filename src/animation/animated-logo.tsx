import Link from "next/link";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
    >
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-teal-500/30 bg-zinc-950 shadow-sm">
        <Image
          src="/favicon.ico"
          alt="S Logo"
          fill
          className="object-contain p-1"
          priority
        />
      </div>
      <span className="whitespace-nowrap font-mono text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-base">
        Sajedul Islam
      </span>
    </Link>
  );
}
