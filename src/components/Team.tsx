"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TEAM = [
  {
    name: "Ekci Suyapno",
    title: "Founder & Principal Consultant",
    image: "/images/team/ekci.png",
    bio: "Senior consultant with deep experience in strategy, facilitation, and analytical work across complex environments. Brings a calm, practical approach to helping organisations clarify priorities, strengthen collaboration, and move forward with confidence.",
  },
  {
    name: "Stephen Williams",
    title: "Head of Business Intelligence",
    image: "/images/team/stephen.png",
    bio: "Senior leader with more than 20 years of management experience across complex operational environments. Brings expertise in business intelligence, strategic analysis and organisational leadership, with a strong focus on improving decision-making and organisational performance.",
  },
  {
    name: "Elisabeth Ibscher",
    title: "Facilitator, Mediator & Coach",
    image: "/images/team/elisabeth.png",
    bio: "Elisabeth Ibscher is a facilitator, mediator and coach with over two decades of international experience across peacebuilding, governance and social impact. She supports organisations and teams through programme strategy, evaluation and organisational change, helping them navigate complexity, strengthen collaboration and move from insight to action.",
  },
  {
    name: "Simon Yazgi",
    title: "Facilitator, Trainer & Conflict Manager",
    image: "/images/team/simon.png",
    bio: "Simon Yazgi is an expert facilitator, trainer and conflict manager with extensive experience supporting teams and organisations through complex challenges. He helps clients strengthen collaboration, navigate sensitive dynamics and build practical solutions that move people and processes forward.",
  },
];

function TeamMemberCard({ member, index }: { member: (typeof TEAM)[0]; index: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-40px" });

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
      <div className="relative w-full aspect-[3/4] bg-bg-card overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale contrast-[1.1] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-head font-bold text-[0.96rem] tracking-[0.04em] mb-1">
          {member.name}
        </h3>
        <p className="text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3">
          {member.title}
        </p>
        <p className="text-[0.82rem] text-text-secondary leading-[1.6] font-light">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="team" className="bg-bg py-28 px-[5vw]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.22em] uppercase text-accent mb-5">
          <span className="w-[18px] h-px bg-accent" />
          Our Team
        </div>
        <h2 className="font-head font-bold text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] max-w-[520px] mb-4">
          Who You Work With
        </h2>
        <p className="text-text-secondary max-w-[460px] font-light mb-14">
          Senior practitioners — no juniors proxying for partners. You always work directly with our consultants.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TEAM.map((member, i) => (
          <TeamMemberCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}