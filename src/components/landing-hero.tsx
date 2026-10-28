import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  return (
    <div
      ref={ref}
      className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-start justify-center px-6 pt-16 sm:px-14 md:px-20 lg:px-32"
    >
      <FadeUp duration={0.6}>
        <h1 className="text-5xl font-bold tracking-tight text-accent sm:text-7xl md:text-8xl">
          Sajedul Islam
        </h1>
      </FadeUp>
      <FadeUp duration={0.6} delay={0.2}>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl md:text-4xl">
          Data Engineering, ML & Full-Stack Systems
        </h2>
      </FadeUp>
      <FadeUp duration={0.6} delay={0.4}>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl">
          CSE undergraduate at BRAC University specializing in turning raw
          multi-source transactional records into resilient Medallion pipelines,
          intelligent ML models, and production-grade full-stack web
          applications.
        </p>
      </FadeUp>
    </div>
  );
}
