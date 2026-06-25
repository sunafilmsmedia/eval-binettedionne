"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TopLogos() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-30 pointer-events-none"
        aria-hidden
      >
        {/* TODO assets : remplacer par le vrai logo Binette & Dionne
            (PNG transparent, texte blanc) et ajuster width/height au ratio réel. */}
        <Image
          src="/logo-binettedionne.png"
          alt="Binette & Dionne"
          width={1200}
          height={300}
          priority
          className="h-7 sm:h-9 w-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30 pointer-events-none"
        aria-hidden
      >
        {/* TODO assets : remplacer par le vrai logo Via Capitale
            (PNG transparent, texte blanc) et ajuster width/height au ratio réel. */}
        <Image
          src="/logo-viacapitale.png"
          alt="Via Capitale"
          width={1000}
          height={300}
          priority
          className="h-7 sm:h-9 w-auto"
        />
      </motion.div>
    </>
  );
}
