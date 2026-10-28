import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import ProjectShowcase from "@/components/projects/project-showcase";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";

export default function Home() {
  return (
    <>
      <NextSeo
        title={`${siteMetadata.author} | Software Engineer`}
        description={siteMetadata.description}
        canonical={siteMetadata.siteUrl}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-14 md:px-20 lg:px-32">
        {/* Hero Section */}
        <section className="relative grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-12 md:gap-14">
          <div className="flex flex-col justify-center md:col-span-7">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
              Software Engineer
            </h1>
            <p className="mt-2 text-xl font-bold text-teal-600 dark:text-teal-400 sm:text-2xl">
              Full-Stack, ML &amp; Systems
            </p>

            <div className="mt-6 space-y-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
              <p>CSE undergraduate at BRAC University.</p>
              <p>
                I build web platforms, machine learning models, and database systems, with a strong interest in how software runs on hardware.
              </p>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">
                Currently looking for internship and junior engineering roles.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
              >
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex h-[340px] w-full max-w-[300px] items-end justify-center md:col-span-5 md:h-[420px] md:max-w-none">
            <Image
              src="/images/heroProfile.png"
              alt="Mir Mohammad Sajedul Islam"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </section>

        {/* Featured Projects Showcase */}
        {PROJECT_SHOWCASE && (
          <section className="my-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Featured Projects
            </h2>
            <div className="mt-8">
              <ProjectShowcase projects={PROJECT_SHOWCASE} />
            </div>
          </section>
        )}

        {/* Skills Section */}
        {SKILLS_DATA && (
          <section className="my-16">
            <SkillsShowcase skills={SKILLS_DATA} />
          </section>
        )}
      </div>
    </>
  );
}
