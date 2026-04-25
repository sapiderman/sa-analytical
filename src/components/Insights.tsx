"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const INSIGHTS = [
  {
    title: "Strategic Alignment",
    tag: "Article",
    aspectClass: "aspect-[4/3] sm:aspect-square md:aspect-[9/16] md:max-h-[480px]",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Data-Driven Decisions",
    tag: "Insight",
    aspectClass: "aspect-video",
    spanClass: "",
  },
  {
    title: "Facilitation in Practice",
    tag: "Case Study",
    aspectClass: "aspect-video",
    spanClass: "",
  },
  {
    title: "Organisational Change",
    tag: "Perspective",
    aspectClass: "aspect-[4/3] sm:aspect-video md:aspect-[32/9]",
    spanClass: "md:col-span-2",
  },
];

function InsightItem({ item, index }: { item: (typeof INSIGHTS)[0]; index: number }) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 24 }}
      animate={itemInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.1 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={`group relative rounded-[var(--radius)] overflow-hidden bg-bg-card border border-white/[0.06] cursor-pointer ${item.spanClass} ${item.aspectClass}`}
    >
      {/* Placeholder gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-bg-card" />

      {/* Hover overlay — only on md+ (touch devices show captions always) */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 md:group-hover:opacity-100" />

      {/* Caption — always visible on mobile, hover-only on md+ */}
      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 pt-4 sm:pt-6 pb-3 sm:pb-4 bg-gradient-to-t from-bg/80 md:from-bg/92% to-transparent opacity-100 translate-y-0 md:opacity-0 md:translate-y-1.5 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-350">
        <span className="text-[0.65rem] sm:text-[0.72rem] tracking-[0.12em] uppercase text-text-muted">
          {item.tag}
        </span>
        <strong className="block font-head text-[0.82rem] sm:text-[0.88rem] font-semibold text-text-primary mt-0.5">
          {item.title}
        </strong>
      </div>
    </motion.div>
  );
}

export default function Insights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      id="insights"
      className="bg-bg-raised border-t border-b border-white/[0.06] py-20 md:py-28 px-5 sm:px-[5vw]"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div className="inline-flex items-center gap-2 text-[0.64rem] sm:text-[0.68rem] tracking-[0.22em] uppercase text-accent mb-4 sm:mb-5">
          <span className="w-[14px] sm:w-[18px] h-px bg-accent" />
          Insight Hub
        </div>
        <h2 className="font-head font-bold text-[clamp(1.7rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] max-w-[520px] mb-3 sm:mb-4">
          Thinking in Motion
        </h2>
        <p className="text-text-secondary max-w-[460px] font-light mb-10 sm:mb-14">
          Short-form perspectives on strategy, data, and decision-making from our consultants in the field.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 gap-3">
        {INSIGHTS.map((item, i) => (
          <InsightItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
