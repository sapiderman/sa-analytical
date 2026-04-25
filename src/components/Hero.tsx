"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-[5vw] pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.10)_0%,rgba(232,201,122,0.04)_45%,transparent_70%)] animate-pulse-glow pointer-events-none" />

      {/* Diagonal lines */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(-45deg,transparent_0px,transparent_60px,rgba(201,168,76,0.02)_60px,rgba(201,168,76,0.02)_61px)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0 }}
        className="relative z-10"
      >
        <Image
          src="/images/SA-logo.png"
          alt="SA-Analytical"
          width={140}
          height={140}
          className="mx-auto mb-8"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
        className="relative z-10 inline-flex items-center gap-3 text-[0.72rem] tracking-[0.22em] uppercase text-accent mb-8"
      >
        <span className="w-7 h-px bg-accent/60" />
        Boutique Strategy Consulting
        <span className="w-7 h-px bg-accent/60" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.25 }}
        className="relative z-10 font-head font-extrabold text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.08] tracking-[-0.02em] max-w-[820px] mb-6"
      >
        Precision in <em className="not-italic bg-gradient-to-br from-text-primary via-accent-light to-accent bg-clip-text text-transparent">Strategy.</em>
        <br />
        Clarity in Data.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.42 }}
        className="relative z-10 max-w-[560px] text-text-secondary text-[1.05rem] font-light leading-[1.7] mb-12"
      >
        Helping teams develop strategies, plan, solve problems, and make decisions through high-level facilitation and BI.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.58 }}
        className="relative z-10 inline-block px-9 py-3.5 border border-accent/50 rounded text-text-primary font-medium text-[0.82rem] tracking-[0.14em] uppercase bg-transparent cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_32px_rgba(201,168,76,0.2)] hover:-translate-y-0.5"
      >
        Book a Consultation
      </motion.a>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.68rem] tracking-[0.18em] uppercase text-text-muted">
          Scroll
        </span>
        <div className="w-px h-11 bg-gradient-to-b from-accent to-transparent animate-scroll-drop" />
      </motion.div>
    </section>
  );
}