import { motion } from "framer-motion";
import portraitSrc from "@/assets/profile-placeholder.svg";
import { getPrefersReducedMotion } from "@/lib/motion";
import { useState, useEffect } from "react";

export function HeroPortrait() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(getPrefersReducedMotion());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-[380px] lg:max-w-none aspect-[4/5] mx-auto lg:mx-0"
    >
      {/* Background glow layers */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary blur-3xl mix-blend-screen rounded-full opacity-50 pointer-events-none" />
      <div className="absolute -inset-8 bg-gradient-to-bl from-primary to-secondary blur-3xl mix-blend-screen rounded-full opacity-30 pointer-events-none" />

      {/* Outer 1px gradient stroke wrapper with floating motion */}
      <motion.div 
        animate={reducedMotion ? {} : { y: [-6, 6] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="relative w-full h-full rounded-3xl p-[1px] bg-gradient-to-br from-primary via-primary/20 to-secondary shadow-2xl"
      >
        {/* Inner container */}
        <div className="relative w-full h-full rounded-[calc(1.5rem-1px)] overflow-hidden bg-background ring-1 ring-inset ring-primary/30 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
          <img 
            src={portraitSrc} 
            alt="Talha Nasir" 
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          
          {/* Subtle inner overlay for blending with dark background if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Floating chip */}
          <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 border border-white/10 backdrop-blur-md shadow-lg">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ boxShadow: "0 0 10px var(--color-secondary)" }} />
            <span className="text-xs font-mono font-medium text-foreground">Full-stack + LLM Engineer</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
