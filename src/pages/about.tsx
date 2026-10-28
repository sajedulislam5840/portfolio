import { NextSeo } from "next-seo";
import Image from "next/image";
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
        {/* Ager Original Top Hero Section */}
        <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              About Me
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              I am an undergraduate Computer Science and Engineering student at BRAC University specializing in Data Engineering, Machine Learning, and Full-Stack Systems.
            </p>
          </div>
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border-2 border-teal-500/20 shadow-xl sm:h-80 sm:w-80">
            <Image
              src="/images/heroProfile.png"
              alt="Mir Mohammad Sajedul Islam"
              fill
              className="object-cover"
              priority
            />
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

        {/* Shobar Niche Certificates & Achievements Grid */}
        <CertificatesShowcase />
      </div>
    </>
  );
}
