import Image from "next/image";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:px-32">
      <div className="w-full sm:w-1/2 md:w-2/3">
        <FadeUp duration={0.5}>
          <h1 className="text-5xl font-bold tracking-tight text-accent sm:text-6xl md:text-7xl">
            About Me
          </h1>
        </FadeUp>
        <FadeUp duration={0.5} delay={0.2}>
          <p className="mt-4 text-base font-semibold leading-relaxed text-zinc-800 dark:text-zinc-200 sm:text-lg">
            Bridging Data Pipelines with Production Engineering.
          </p>
        </FadeUp>
        <FadeUp duration={0.5} delay={0.4}>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            I am a Computer Science and Engineering undergraduate at BRAC University and a former Data Preparation Specialist Intern at DataSynthis. I specialize in building end-to-end data pipelines and enterprise web platforms.
          </p>
        </FadeUp>
        <FadeUp duration={0.5} delay={0.6}>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            Whether it&apos;s architecting a multi-tier Medallion ETL framework (Raw → Silver → Gold) for transactional intelligence or deploying modern full-stack systems using Next.js and FastAPI, I prioritize clean architectural decoupling, performance, and normalized database schemas.
          </p>
        </FadeUp>
      </div>
      <div className="flex w-full items-center justify-center sm:w-1/2 md:w-1/3">
        <FadeRight duration={0.5} delay={0.3}>
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent shadow-xl sm:h-80 sm:w-80">
            <Image
              src="/images/heroProfile.png"
              alt="Mir Mohammad Sajedul Islam"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeRight>
      </div>
    </div>
  );
}
