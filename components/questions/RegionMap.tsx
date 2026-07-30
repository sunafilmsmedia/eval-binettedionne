"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { REGIONS } from "@/lib/regions";

const Inner = dynamic(() => import("./RegionMapInner"), { ssr: false });

interface Props {
  value?: string;
  onChange: (id: string) => void;
  confirming?: boolean;
}

export default function RegionMap({ value, onChange, confirming }: Props) {
  const selectedName = REGIONS.find((r) => r.id === value)?.name;

  return (
    <div className="space-y-3">
      <div className="relative w-full h-[440px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <Inner value={value} onChange={onChange} />

        {/* Confirmation « Bien reçu » après le clic, avant l'analyse */}
        <AnimatePresence>
          {confirming && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-[500] flex items-center justify-center backdrop-blur-sm"
              style={{ background: "rgba(40,8,11,0.72)" }}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 8 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center px-6"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                  className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_12px_40px_-8px_rgba(16,185,129,0.6)]"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M4 12.5L9.5 18L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
                <p className="font-serif text-3xl sm:text-4xl text-white mt-5">Bien reçu&nbsp;!</p>
                <p className="text-sm text-white/75 mt-1.5">
                  {selectedName ? `Secteur : ${selectedName}` : "Secteur enregistré"}
                </p>
                <p className="text-xs text-white/60 mt-3">On prépare ton analyse…</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-xs text-white/50 text-center">
        {value
          ? `Secteur sélectionné : ${selectedName}`
          : "Touche la carte près de ta propriété — on sélectionne le secteur le plus proche."}
      </p>
    </div>
  );
}
