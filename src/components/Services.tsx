"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-accent" strokeWidth={1.5} fill="none">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
      </svg>
    ),
    title: "Strategy",
    description:
      "We work with leadership teams to shape practical, evidence-based strategies that turn uncertainty into clear direction, concrete action, and measurable milestones.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-accent" strokeWidth={1.5} fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M12 8h4M7 12h10" />
      </svg>
    ),
    title: "Business Intelligence",
    description:
      "From dashboards to predictive models, we transform raw data into intelligence that drives confident, timely decision-making at every level of your organisation.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-accent" strokeWidth={1.5} fill="none">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      </svg>
    ),
    title: "Facilitation",
    description:
      "High-stakes workshops, strategy sessions and problem-solving sprints guided by certified facilitators who surface alignment and build commitment across teams.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: EASE },
  }),
};

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      className="group relative p-6 sm:p-8 md:p-11 bg-bg-card overflow-hidden transition-colors duration-400 hover:bg-accent/[0.03]"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/7 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      {/* Hover border glow */}
      <div className="absolute -inset-px border border-transparent group-hover:border-accent/30 group-hover:shadow-[inset_0_0_40px_rgba(201,168,76,0.05)] transition-all duration-400 pointer-events-none" />

      <div className="relative z-10">
        <div className="w-10 h-10 sm:w-11 sm:h-11 border border-white/[0.06] rounded-[10px] flex items-center justify-center mb-5 sm:mb-7 transition-all duration-400 group-hover:border-accent/45 group-hover:shadow-[0_0_16px_rgba(201,168,76,0.18)]">
          {service.icon}
        </div>
        <h3 className="font-head font-bold text-[1.05rem] sm:text-[1.1rem] tracking-[0.04em] mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-[0.85rem] sm:text-[0.9rem] text-text-secondary leading-[1.65] font-light">
          {service.description}
        </p>
        <span className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 font-head text-[0.65rem] sm:text-[0.7rem] tracking-[0.14em] text-text-muted">
          {service.num}
        </span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="services" className="bg-bg py-20 md:py-28 px-5 sm:px-[5vw]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-2 text-[0.64rem] sm:text-[0.68rem] tracking-[0.22em] uppercase text-accent mb-4 sm:mb-5">
          <span className="w-[14px] sm:w-[18px] h-px bg-accent" />
          What We Do
        </div>
        <h2 className="font-head font-bold text-[clamp(1.7rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] max-w-[520px] mb-3 sm:mb-4">
          Three Disciplines. One Firm.
        </h2>
        <p className="text-text-secondary max-w-[460px] font-light mb-10 sm:mb-14">
          Integrated expertise delivered with analytical precision — tailored to the complexity of your challenge.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] border border-white/[0.06] rounded-[var(--radius)] overflow-hidden">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.num} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
