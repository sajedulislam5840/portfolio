import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import EducationShowcase from "@/components/education/education-showcase";
import CertificatesShowcase from "@/components/documents/certificates-showcase";
import { EDUCATION } from "@/data/education";

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
            I am an undergraduate Computer Science and Engineering student at BRAC University specializing in Data Engineering, Machine Learning, and Full-Stack Systems. I combine academic rigor with practical engineering, alongside a background in BNCC military cadetship and competitive athletics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mt-12">
          <EducationShowcase list={EDUCATION} />
        </div>

        {/* Dedicated Certificates & Achievements Grid */}
        <CertificatesShowcase />
      </div>
    </>
  );
}
