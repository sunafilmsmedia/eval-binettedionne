"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Deux courtiers — chacun avec sa photo et son numéro cliquable (tel:).
const BROKERS = [
  {
    firstName: "Félix-Antoine",
    photo: "/felix.jpg",
    objectPosition: "50% 22%",
    phoneDisplay: "819 350-4354",
    phoneTel: "+18193504354",
  },
  {
    firstName: "Kellie",
    photo: "/kellie.jpg",
    objectPosition: "50% 18%",
    phoneDisplay: "819 740-8066",
    phoneTel: "+18197408066",
  },
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
        sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[340px]
        rounded-2xl glass-card-light
        px-4 py-3.5 sm:px-5 sm:py-4
      "
    >
      {/* En-tête */}
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="text-[10px] sm:text-[11px] font-medium text-emerald-700 uppercase tracking-wide">
          Disponibles maintenant
        </span>
      </div>
      <p className="font-serif text-lg sm:text-xl leading-tight text-slate-900 mt-1">
        Binette &amp; Dionne
      </p>
      <p className="text-[11px] sm:text-xs text-slate-500">
        Courtiers immobiliers — Victoriaville
      </p>

      <div className="my-2.5 h-px bg-slate-900/10" />

      {/* Une ligne cliquable par courtier */}
      <div className="flex flex-col gap-2">
        {BROKERS.map((b) => (
          <a
            key={b.phoneTel}
            href={`tel:${b.phoneTel}`}
            aria-label={`Appeler ${b.firstName} au ${b.phoneDisplay}`}
            className="group flex items-center gap-3 no-underline"
          >
            <div className="relative shrink-0">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md bg-slate-100">
                <Image
                  src={b.photo}
                  alt={b.firstName}
                  fill
                  sizes="48px"
                  className="object-cover"
                  style={{ objectPosition: b.objectPosition }}
                  priority
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" aria-hidden />
            </div>

            <div className="min-w-0 flex-1 leading-tight">
              <p className="text-[13px] sm:text-sm font-semibold text-slate-900 truncate">
                {b.firstName}
              </p>
              <p className="text-[12px] sm:text-[13px] text-slate-500 group-hover:text-[var(--color-brand-600)] transition-colors tabular-nums">
                {b.phoneDisplay}
              </p>
            </div>

            <span className="
              shrink-0 w-9 h-9 rounded-full
              bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)]
              flex items-center justify-center
              shadow-[0_8px_20px_-6px_rgba(225,29,42,0.55)]
              group-hover:shadow-[0_10px_24px_-6px_rgba(225,29,42,0.7)]
              transition-shadow
            ">
              <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path
                  d="M3.5 4.5C3.5 4 4 3.5 4.5 3.5H7L8.5 7L6.5 8.5C7.5 11 9 12.5 11.5 13.5L13 11.5L16.5 13V15.5C16.5 16 16 16.5 15.5 16.5C9 16.5 3.5 11 3.5 4.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
