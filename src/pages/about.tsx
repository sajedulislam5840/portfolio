import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { FiExternalLink, FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

const areas = [
  {
    title: "Full-stack development",
    body: "Next.js, React, Tailwind CSS, FastAPI, PostgreSQL. Built and deployed AZS: The Catalyst, an EdTech platform with role-based access and subscription control.",
  },
  {
    title: "Machine learning",
    body: "Supervised pipelines with careful evaluation. My career-switch model used about 19,000 records, class-imbalance handling, and Stratified 5-Fold Cross-Validation, judged on Precision, Recall, and ROC-AUC rather than raw accuracy.",
  },
  {
    title: "Databases and data quality",
    body: "Normalized schemas (3NF), a double-entry billing ledger in SparkEnergies, data validation, and cleaning workflows in Python and SQL.",
  },
  {
    title: "Edge AI and systems",
    body: "A freestanding C++17 runtime and a custom Verilog 4-way INT8 SIMD accelerator for RISC-V without an FPU, profiled across FP32 scalar, INT8 scalar, and INT8 hardware-accelerated paths.",
  },
];

export default function About() {
  return (
    <>
      <NextSeo
        title={`About | ${siteMetadata.author}`}
        description="CSE undergraduate at BRAC University building full-stack platforms, ML pipelines, and RISC-V edge AI systems."
        canonical={`${siteMetadata.siteUrl}/about`}
      />

      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-14 md:px-20 lg:px-24">
        {/* Header & Hero Bio */}
        <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              About me
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
              I&apos;m a Computer Science and Engineering undergraduate at BRAC University (expected 2027). I build full-stack web platforms, machine learning pipelines, and database systems, and I&apos;m especially interested in how software runs close to hardware.
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              I worked as a Data Preparation Specialist intern at DataSynthis, where I audited and validated datasets and built cleaning routines to reduce manual data errors. Outside coursework, I build projects end to end—from relational schema design to deployed interfaces—and document the architectural trade-offs behind my decisions.
            </p>
          </div>

          <div className="relative mx-auto flex h-[260px] w-[220px] items-end justify-center md:col-span-4 md:h-[300px] md:w-full">
            <Image
              src="/images/heroProfile.png"
              alt="Mir Mohammad Sajedul Islam"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </section>

        {/* What I Work On */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            What I work on
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {areas.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section className="mt-14 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Research interests
          </h2>
          <p className="mt-2 font-medium text-teal-600 dark:text-teal-400">
            Edge AI acceleration · Quantized neural network inference · RISC-V and hardware-software co-design · Efficient embedded machine learning
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            My current project is a self-directed study of how fixed-point quantization and custom instructions reduce execution cycles and memory traffic on constrained hardware. The repository includes design trade-offs, derivations, and reproducible CMake test harnesses.
          </p>
          <Link
            href="https://github.com/sajedulislam5840/riscv-edge-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 underline underline-offset-4 hover:text-teal-700 dark:text-teal-400"
          >
            <span>View the repository</span>
            <FiExternalLink className="h-3.5 w-3.5" />
          </Link>
        </section>

        {/* Experience and Education */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Experience and education
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/60">
              <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                <strong className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Data Preparation Specialist (Internship), DataSynthis
                </strong>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  Aug 2025 – Mar 2026
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Dataset auditing, validation, and quality control routines for client deliverables.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/60">
              <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                <strong className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  B.Sc. in Computer Science and Engineering, BRAC University
                </strong>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  Sep 2023 – Expected 2027
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Certifications
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Cisco: Introduction to Data Science (2025) · Cisco: Python Essentials 1 (2025) · Programming Hero: Complete Web Development (2026)
          </p>
        </section>

        {/* How I Work */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            How I work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            I read before I write, make small, reviewable changes, and test what I ship. I value clear documentation and honest reporting of what works and what doesn&apos;t.
          </p>
        </section>

        {/* Availability and Contact */}
        <section className="mt-14 border-t border-zinc-200/80 pt-10 dark:border-zinc-800/80">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Availability and contact
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            I&apos;m open to internships, junior roles, and freelance projects, and I&apos;m preparing for MSc and research opportunities in Europe, including Italy. I welcome conversations with researchers and engineers in embedded systems, computer architecture, and machine learning.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
            <a
              href={`mailto:${siteMetadata.email}`}
              className="inline-flex items-center gap-1.5 text-teal-600 underline underline-offset-4 hover:text-teal-700 dark:text-teal-400"
            >
              <FiMail className="h-4 w-4" />
              <span>{siteMetadata.email}</span>
            </a>
            <Link
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-700 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              <FiGithub className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-700 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              <FiLinkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-700 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              <FiFileText className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
