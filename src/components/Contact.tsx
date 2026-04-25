"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-bg-raised border-t border-white/[0.06] py-20 md:py-28 px-[5vw]"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
      >
        {/* Left */}
        <div>
          <h2 className="font-head font-bold text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.15] tracking-[-0.02em] mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-text-secondary font-light max-w-[340px] mb-8">
            Whether you need a strategy reset, sharper data, or a facilitated session — we&apos;d like to hear from you.
          </p>
          <a
            href="mailto:hello@sa-analytical.com"
            className="inline-flex items-center gap-2 text-text-primary hover:text-accent transition-colors duration-300 border-b border-white/[0.06] hover:border-accent pb-1"
          >
            <svg
              className="w-4 h-4 stroke-current"
              strokeWidth={1.5}
              fill="none"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4l-10 8L2 4" />
            </svg>
            hello@sa-analytical.com
          </a>

          <div className="flex items-center gap-4 my-10 text-[0.7rem] tracking-[0.14em] uppercase text-text-muted">
            <span className="flex-1 h-px bg-white/[0.06]" />
            or
            <span className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <p className="text-text-secondary font-light max-w-[340px]">
            Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Right — Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-9">
          <div className="group relative">
            <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-text-muted mb-2 transition-colors duration-300 group-focus-within:text-accent">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-none border-b border-white/[0.06] text-text-primary font-light text-[0.95rem] py-2 px-0 outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-muted/50"
              placeholder="Your name"
            />
            <div className="absolute bottom-0 left-0 h-px bg-accent w-0 group-focus-within:w-full transition-all duration-400" />
          </div>

          <div className="group relative">
            <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-text-muted mb-2 transition-colors duration-300 group-focus-within:text-accent">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-none border-b border-white/[0.06] text-text-primary font-light text-[0.95rem] py-2 px-0 outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-muted/50"
              placeholder="you@company.com"
            />
            <div className="absolute bottom-0 left-0 h-px bg-accent w-0 group-focus-within:w-full transition-all duration-400" />
          </div>

          <div className="group relative">
            <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-text-muted mb-2 transition-colors duration-300 group-focus-within:text-accent">
              Message
            </label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-none border-b border-white/[0.06] text-text-primary font-light text-[0.95rem] py-2 px-0 outline-none transition-colors duration-300 focus:border-accent resize-none placeholder:text-text-muted/50"
              placeholder="Tell us about your challenge"
            />
            <div className="absolute bottom-0 left-0 h-px bg-accent w-0 group-focus-within:w-full transition-all duration-400" />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`self-start px-10 py-3.5 rounded text-[0.8rem] font-semibold tracking-[0.14em] uppercase cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              submitted
                ? "bg-accent/60 text-white/70 pointer-events-none"
                : "bg-accent text-bg hover:bg-accent-light hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)] hover:-translate-y-0.5"
            }`}
          >
            {submitted ? "Sent ✓" : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}