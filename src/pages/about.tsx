import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CertificatesShowcase from "@/components/documents/certificates-showcase";
import { EDUCATION } from "@/data/education";
import { EXPERIENCE } from "@/data/experience";

export default function About() {
  return (
    <>
      <NextSeo
        title={`About | ${siteMetadata.author}`}
        description="About Mir Mohammad Sajedul Islam"
        canonical={`${siteMetadata.siteUrl}/about`}
      />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-14 md:px-20 lg:px-32">
        {/* Template Original Hero Layout: Left Illustration + Right Bio */}
        <section className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
          {/* Left Portrait Image */}
          <div className="relative mx-auto flex h-[340px] w-full max-w-[320px] items-end justify-center md:col-span-5 md:h-[420px] md:max-w-none">
            <Image
              src="/images/heroProfile.png"
              alt="Mir Mohammad Sajedul Islam"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Right Intro Content */}
          <div className="flex flex-col justify-center md:col-span-7">
            <h1 className="text-4xl font-extrabold tracking-tight text-teal-600 dark:text-teal-400 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Sajedul Islam
            </h1>

            <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Undergraduate Computer Science and Engineering student at BRAC University specializing in Data Engineering, Machine Learning, and Systems Architecture. I focus on building efficient, resilient software solutions ranging from high-throughput ETL data pipelines to hardware-accelerated edge inference on RISC-V.
            </p>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Explore my latest{" "}
              <Link
                href="/projects"
                className="font-medium text-teal-600 underline underline-offset-4 hover:text-teal-700 dark:text-teal-400"
              >
                projects
              </Link>{" "}
              showcasing my work in Python, Scikit-Learn, Next.js, SQL, and Edge AI systems.
            </p>

            {/* Location Badge with Vector Bangladesh Flag */}
            <div className="mt-8 flex items-center justify-end gap-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              <svg
                className="h-4 w-6 rounded-[2px] shadow-sm"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="12" fill="#006a4e" />
                <circle cx="9" cy="6" r="4" fill="#f42a41" />
              </svg>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {EXPERIENCE && EXPERIENCE.length > 0 && (
          <section className="my-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Experience
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {EXPERIENCE.map((exp: any, index: number) => (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                    {exp.company}
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">{exp.date}</p>
                  {exp.description && (
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Education
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
              >
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {edu.title}
                  </h3>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {edu.date}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {edu.organisation.name} — <span className="text-xs text-zinc-500">{edu.location}</span>
                </p>
                {edu.description && (
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certificates & Achievements Grid */}
        <CertificatesShowcase />
      </div>
    </>
  );
}
