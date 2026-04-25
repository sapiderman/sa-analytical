import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative pt-14 pb-10 px-[5vw] border-t border-white/[0.06] overflow-hidden">
      {/* Watermark */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-head font-extrabold text-[clamp(4rem,12vw,9rem)] tracking-[0.08em] uppercase text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        SA-Analytical
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 flex-wrap relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <Image
              src="/images/SA-logo.png"
              alt="SA-Analytical"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <div>
              <div className="font-head font-extrabold text-[1rem] tracking-[0.12em] uppercase leading-none">
                <span className="text-accent">SA</span>-Analytical
              </div>
              <div className="text-[0.78rem] text-text-muted tracking-[0.06em] mt-1">
                Precision in Strategy. Clarity in Data.
              </div>
            </div>
          </div>
        </div>

        <ul className="flex gap-8">
          <li>
            <a
              href="#services"
              className="text-[0.72rem] tracking-[0.12em] uppercase text-text-muted hover:text-text-primary transition-colors duration-250"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#insights"
              className="text-[0.72rem] tracking-[0.12em] uppercase text-text-muted hover:text-text-primary transition-colors duration-250"
            >
              Insights
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text-[0.72rem] tracking-[0.12em] uppercase text-text-muted hover:text-text-primary transition-colors duration-250"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[0.72rem] tracking-[0.12em] uppercase text-text-muted hover:text-text-primary transition-colors duration-250"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-[0.7rem] text-text-muted relative z-10">
        © 2026 SA-Analytical. All rights reserved.
      </div>
    </footer>
  );
}