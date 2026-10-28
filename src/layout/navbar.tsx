import AnimatedLogo from "@/animation/animated-logo";
import ThemeSwitch from "@/components/utility/theme-switch";
import Link from "next/link";
import { useRouter } from "next/router";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 md:px-16">
        {/* Fixed Top-Left Brand Logo */}
        <div className="flex items-center">
          <AnimatedLogo />
        </div>

        {/* Right Navigation & Theme Switch */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-100/70 p-1 dark:border-zinc-800 dark:bg-zinc-900/70">
            {NAV_LINKS.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all sm:text-sm ${
                    isActive
                      ? "bg-teal-600 text-white shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
