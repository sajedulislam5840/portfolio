import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:px-14 md:px-20 lg:px-32">
      <p>© {new Date().getFullYear()} Mir Mohammad Sajedul Islam</p>
      <div className="flex items-center gap-6">
        <Link
          href="https://github.com/sajedulislam5840"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="transition hover:text-accent"
        >
          <FiGithub className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sajedul-islam-data"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="transition hover:text-accent"
        >
          <FiLinkedin className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}
