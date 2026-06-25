"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Deux courtiers — chacun avec son propre numéro cliquable (tel:).
const BROKERS = [
  { firstName: "Félix-Antoine", phoneDisplay: "819 350-4354", phoneTel: "+18193504354" },
  { firstName: "Kellie", phoneDisplay: "819 740-8066", phoneTel: "+18197408066" },
];

export default function BrokerBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="
        fixed z-40
        bottom-4 left-4 right-4
        sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[360px]
        rounded-2xl glass-card-light
        px-4 py-3.5 sm:px-5 sm:py-4
        flex items-center gap-3.5
      "
    >
      <div className="relative shrink-0">
        <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-white shadow-md">
          <Image
            src="/broker.png"
            alt="Félix-Antoine Binette & Kellie Dionne"
            fill
            sizes="(max-width: 640px) 64px, 72px"
            className="object-cover"
            style={{ objectPosition: "50% 18%" }}
            priority
          />
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full ring-[2.5px] ring-white" aria-hidden>
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] sm:text-[11px] font-medium text-emerald-700 uppercase tracking-wide">
            Disponibles maintenant
          </span>
        </div>
        <p className="font-serif text-base sm:text-lg leading-tight text-slate-900 mt-0.5 truncate">
          Binette &amp; Dionne
        </p>
        <p className="text-[11px] sm:text-xs text-slate-500 mb-1.5 truncate">
          Courtiers immobiliers — Victoriaville
        </p>

        {/* Deux numéros cliquables */}
        <div className="flex flex-col gap-1">
          {BROKERS.map((b) => (
            <a
              key={b.phoneTel}
              href={`tel:${b.phoneTel}`}
              aria-label={`Appeler ${b.firstName} au ${b.phoneDisplay}`}
              className="
                group flex items-center gap-2 no-underline
                text-slate-700 hover:text-[var(--color-brand-600)]
                transition-colors
              "
            >
              <span className="
                shrink-0 w-7 h-7 rounded-full
                bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)]
                flex items-center justify-center
                shadow-[0_6px_16px_-5px_rgba(225,29,42,0.55)]
                group-hover:shadow-[0_8px_20px_-5px_rgba(225,29,42,0.7)]
                transition-shadow
              ">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path
                    d="M3.5 4.5C3.5 4 4 3.5 4.5 3.5H7L8.5 7L6.5 8.5C7.5 11 9 12.5 11.5 13.5L13 11.5L16.5 13V15.5C16.5 16 16 16.5 15.5 16.5C9 16.5 3.5 11 3.5 4.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium tracking-wide">
                <span className="text-slate-500">{b.firstName} ·</span> {b.phoneDisplay}
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
