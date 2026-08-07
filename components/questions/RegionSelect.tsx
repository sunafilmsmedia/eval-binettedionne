"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { REGIONS } from "@/lib/regions";

interface Props {
  value?: string;
  onChange: (id: string) => void;
  confirming?: boolean;
}

// Normalise (sans accents, minuscules) pour une recherche tolérante.
function norm(s: string) {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export default function RegionSelect({ value, onChange, confirming }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = norm(query);
    if (!q) return REGIONS;
    return REGIONS.filter((r) => norm(r.name).includes(q));
  }, [query]);

  // Confirmation « Bien reçu » avant le passage automatique à l'analyse.
  if (confirming) {
    const selected = REGIONS.find((r) => r.id === value)?.name;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center py-16"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.05, type: "spring", stiffness: 260, damping: 18 }}
          className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_12px_40px_-8px_rgba(16,185,129,0.6)]"
        >
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M4 12.5L9.5 18L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
        <p className="font-serif text-3xl sm:text-4xl text-white mt-5">Bien reçu&nbsp;!</p>
        <p className="text-sm text-white/75 mt-1.5">
          {selected ? `Secteur : ${selected}` : "Secteur enregistré"}
        </p>
        <p className="text-xs text-white/60 mt-3">On prépare ton analyse…</p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Champ de recherche */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="9" cy="9" r="6" />
          <path d="M14 14l4 4" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Commence à taper ta ville ou ton secteur…"
          autoFocus
          autoComplete="off"
          className="
            w-full rounded-xl
            bg-white/[0.06] border border-white/12
            pl-11 pr-4 py-3.5
            text-white placeholder:text-white/35 text-[15px]
            focus:border-[var(--color-brand-400)]/60 focus:bg-white/[0.08]
            outline-none transition-colors
          "
        />
      </div>

      {/* Liste filtrée */}
      <div className="mt-3 max-h-[340px] overflow-y-auto rounded-xl border border-white/10 bg-white/[0.02] divide-y divide-white/5">
        {filtered.length === 0 ? (
          <p className="px-4 py-8 text-sm text-white/50 text-center">
            Aucun secteur trouvé. Choisis « Autre secteur / ailleurs ».
          </p>
        ) : (
          filtered.map((r) => {
            const selected = value === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => onChange(r.id)}
                className={`
                  w-full text-left px-4 py-3 text-[15px]
                  flex items-center justify-between gap-2
                  transition-colors
                  ${selected
                    ? "bg-[var(--color-brand-500)]/25 text-white"
                    : "text-white/85 hover:bg-white/[0.06]"}
                `}
              >
                <span>{r.name}</span>
                {selected && (
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 10l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })
        )}
      </div>

      <p className="mt-2.5 text-xs text-white/45 text-center">
        {value
          ? `Secteur sélectionné : ${REGIONS.find((r) => r.id === value)?.name}`
          : "Tape les premières lettres — la liste se filtre automatiquement."}
      </p>
    </div>
  );
}
