import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import ProjectShowcase from "@/components/projects/project-showcase";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { FiExternalLink, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";

export default function Home() {
  const proofChips = [
    "Live EdTech platform",
    "ML pipeline on ~19,000 records",
    "RISC-V C++17 + Verilog SIMD project",
  ];

  return (
    <>
      <NextSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: siteMetadata.title,
          description: siteMetadata.description,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
              width: 1200,
              height: 630,
              alt: siteMetadata.author,
            },
          ],
          site_name: siteMetadata.author,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-14 md:px-20 lg:px-32">
        {/* Dual-Target Hero Section */}
        <section className="relative grid grid-cols-1 items-center gap-10 py-6 md:grid-cols-12 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center md:col-span-7"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 sm:text-sm">
              CSE Undergraduate, BRAC University · Expected 2027
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
              Full-Stack, ML &amp; Edge AI Systems
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
              I build web platforms and machine learning pipelines, and I&apos;m
              researching how quantized neural networks run efficiently on RISC-V
              hardware without an FPU.
            </p>

            {/* Proof Chips */}
            <ul className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
              {proofChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-zinc-200 bg-zinc-50/70 px-3 py-1 font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300"
                >
                  {chip}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-sm">
              Open to internships, junior roles, and freelance projects. Preparing for
              MSc and research opportunities in Europe, including Italy.
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              >
                Download CV
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="text-xs font-semibold text-teal-600 underline underline-offset-4 transition hover:text-teal-700 dark:text-teal-400 sm:text-sm"
              >
                {siteMetadata.email}
              </a>
            </div>

            {/* Social & Freelance Channels */}
            <div className="mt-5 flex items-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400 sm:text-sm">
              <Link
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <FiGithub className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
              <span>·</span>
              <Link
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <FiLinkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
              {siteMetadata.fiverr && (
                <>
                  <span>·</span>
                  <Link
                    href={siteMetadata.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition hover:text-green-600 dark:hover:text-green-400"
                  >
                    <SiFiverr className="h-4 w-4" />
                    <span>Fiverr</span>
                  </Link>
                </>
              )}
            </div>
          </motion.div>

          {/* Profile Visual */}
          <div className="relative mx-auto flex h-[320px] w-full max-w-[280px] items-end justify-center md:col-span-5 md:h-[400px] md:max-w-none">
            <Image
              src="/images/heroProfile.png"
              alt="Mir Mohammad Sajedul Islam"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </section>

        {/* Academic / Research Interest Block */}
        <section className="my-10 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="text-teal-600 dark:text-teal-400">Research interests:</span>{" "}
              Edge AI acceleration · Quantized inference · RISC-V and hardware-software co-design · Efficient embedded ML
            </p>
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-sm">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">Current project:</span>{" "}
              A freestanding C++17 runtime and custom Verilog 4-way INT8 dot-product accelerator, profiled across FP32 scalar, INT8 scalar, and INT8 hardware-accelerated datapaths.{" "}
              <Link
                href="https://github.com/sajedulislam5840/riscv-edge-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-teal-600 underline underline-offset-4 hover:text-teal-700 dark:text-teal-400"
              >
                Repository <FiExternalLink className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </section>

        {/* Featured Projects Showcase */}
        {PROJECT_SHOWCASE && PROJECT_SHOWCASE.length > 0 && (
          <section className="my-14">
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
          <section className="my-14">
            <SkillsShowcase skills={SKILLS_DATA} />
          </section>
        )}
      </div>
    </>
  );
}
