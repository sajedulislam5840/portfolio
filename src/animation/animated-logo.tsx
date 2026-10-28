import Link from "next/link";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-900 border border-teal-500/30 shadow-md transition-transform group-hover:scale-105">
        <Image
          src="/favicon.ico"
          alt="S Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="font-mono text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
        Sajedul Islam
      </span>
    </Link>
  );
}
