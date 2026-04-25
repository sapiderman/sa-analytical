"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const TEAM = [
  {
    name: "Ekci Suyapno",
    title: "Founder & Principal Consultant",
    image: "/images/team/ekci.webp",
    fallback: "/images/team/ekci.png",
    bio: "Senior consultant with deep experience in strategy, facilitation, and analytical work across complex environments. Brings a calm, practical approach to helping organisations clarify priorities, strengthen collaboration, and move forward with confidence.",
  },
  {
    name: "Stephen Williams",
    title: "Head of Business Intelligence",
    image: "/images/team/stephen.webp",
    fallback: "/images/team/stephen.png",
    bio: "Senior leader with more than 20 years of management experience across complex operational environments. Brings expertise in business intelligence, strategic analysis and organisational leadership, with a strong focus on improving decision-making and organisational performance.",
  },
  {
    name: "Elisabeth Ibscher",
    title: "Facilitator, Mediator & Coach",
    image: "/images/team/elisabeth.webp",
    fallback: "/images/team/elisabeth.png",
    bio: "Elisabeth Ibscher is a facilitator, mediator and coach with over two decades of international experience across peacebuilding, governance and social impact. She supports organisations and teams through programme strategy, evaluation and organisational change, helping them navigate complexity, strengthen collaboration and move from insight to action.",
  },
  {
    name: "Simon Yazgi",
    title: "Facilitator, Trainer & Conflict Manager",
    image: "/images/team/simon.webp",
    fallback: "/images/team/simon.png",
    bio: "Simon Yazgi is an expert facilitator, trainer and conflict manager with extensive experience supporting teams and organisations through complex challenges. He helps clients strengthen collaboration, navigate sensitive dynamics and build practical solutions that move people and processes forward.",
  },
];

function TeamMemberCard({ member, index }: { member: (typeof TEAM)[0]; index: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-40px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.12 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="group flex flex-col border border-white/[0.06] rounded-[var(--radius)] overflow-hidden bg-bg-card transition-all duration-350 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3),0_0_0_1px_rgba(201,168,76,0.14)]"
    >
      {/* Portrait */}
      <div className="relative w-full aspect-square sm:aspect-[3/4] bg-bg-card overflow-hidden">
        <picture>
          <source srcSet={member.image} type="image/webp" />
          <img
            src={member.fallback}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.1] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
          />
        </picture>
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="font-head font-bold text-[0.92rem] sm:text-[0.96rem] tracking-[0.04em] mb-1">
          {member.name}
        </h3>
        <p className="text-[0.68rem] sm:text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-2 sm:mb-3">
          {member.title}
        </p>
        <p className={`text-[0.78rem] sm:text-[0.82rem] text-text-secondary leading-[1.6] font-light ${!expanded ? "line-clamp-3 sm:line-clamp-none" : ""}`}>
          {member.bio}
        </p>
      </div>
      {/* Read more toggle for mobile */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[0.72rem] text-accent tracking-[0.1em] uppercase px-4 sm:px-5 pb-3 sm:pb-4 sm:hidden border-t border-white/[0.04] text-left w-full py-3"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="team" className="bg-bg py-20 md:py-28 px-5 sm:px-[5vw]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div className="inline-flex items-center gap-2 text-[0.64rem] sm:text-[0.68rem] tracking-[0.22em] uppercase text-accent mb-4 sm:mb-5">
          <span className="w-[14px] sm:w-[18px] h-px bg-accent" />
          Our Team
        </div>
        <h2 className="font-head font-bold text-[clamp(1.7rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] max-w-[520px] mb-3 sm:mb-4">
          Who You Work With
        </h2>
        <p className="text-text-secondary max-w-[460px] font-light mb-10 sm:mb-14">
          Senior practitioners — no juniors proxying for partners. You always work directly with our consultants.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {TEAM.map((member, i) => (
          <TeamMemberCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
