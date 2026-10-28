import { NextSeo } from "next-seo";
import Link from "next/link";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CertificatesShowcase from "@/components/documents/certificates-showcase";
import { EDUCATION } from "@/data/education";
import { FiExternalLink, FiMapPin, FiCalendar } from "react-icons/fi";

export default function About() {
  return (
    <>
      <NextSeo
        title={`About | ${siteMetadata.author}`}
        description="Background, academic qualifications, military cadetship, and technical journey of Mir Mohammad Sajedul Islam."
        canonical={`${siteMetadata.siteUrl}/about`}
      />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-14 md:px-20 lg:px-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            About Me
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Undergraduate Computer Science and Engineering student at BRAC University specializing in Data Engineering, Machine Learning, and Full-Stack Systems. Combines rigorous academic foundations with practical software engineering, alongside a background in BNCC military cadetship and competitive athletics.
          </p>
        </div>

        {/* Education Timeline */}
        <section className="my-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Education
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {EDUCATION.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400">
                    <FiCalendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                  <Link
                    href={item.organisation.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    <span>{item.organisation.name}</span>
                    <FiExternalLink className="h-3 w-3" />
                  </Link>
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {item.description && (
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated Certificates & Achievements Grid */}
        <CertificatesShowcase />
      </div>
    </>
  );
}
