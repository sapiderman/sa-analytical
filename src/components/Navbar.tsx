"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#insights", label: "Insights" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Book a Call" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: EASE } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.4, ease: EASE },
  }),
  exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-4 border-b border-white/[0.06] bg-bg/90 backdrop-blur-xl">
        <Link href="#hero" className="relative z-50">
          <Image
            src="/images/SA-logo.png"
            alt="SA-Analytical"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex items-center gap-3 px-4 py-2.5 border border-white/[0.06] rounded-lg text-xs font-medium tracking-[0.12em] uppercase text-text-primary cursor-pointer transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.03]"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          Menu
          <span className="flex flex-col gap-[3px] w-[18px]">
            <motion.span
              className="block h-[1.5px] bg-current origin-left"
              animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            />
            <motion.span
              className="block h-[1.5px] bg-current"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-[1.5px] bg-current origin-left"
              animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            />
          </span>
        </button>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-xl"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-accent-light ${
                    link.href === "#contact"
                      ? "text-accent font-medium"
                      : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}