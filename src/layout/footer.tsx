import Link from "next/link";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/60 bg-white/50 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-14 md:px-20 lg:px-32">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-zinc-600 dark:text-zinc-400">
          {siteMetadata.github && (
            <Link
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-teal-600 dark:hover:text-teal-400"
            >
              <FiGithub className="h-5 w-5" />
            </Link>
          )}

          {siteMetadata.linkedin && (
            <Link
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-teal-600 dark:hover:text-teal-400"
            >
              <FiLinkedin className="h-5 w-5" />
            </Link>
          )}

          {siteMetadata.email && (
            <Link
              href={`mailto:${siteMetadata.email}`}
              aria-label="Email"
              className="transition hover:text-teal-600 dark:hover:text-teal-400"
            >
              <FiMail className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
