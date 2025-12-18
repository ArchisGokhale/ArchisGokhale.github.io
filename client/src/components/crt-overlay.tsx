import { ReactNode } from "react";
import { motion } from "framer-motion";

export function CRTOverlay({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-mono text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* CRT Screen Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {/* Scanlines */}
        <div className="scanlines opacity-50 mix-blend-overlay" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
        
        {/* RGB Shift / Chromatic Aberration (Static) */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-screen bg-repeat pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} 
        />
        
        {/* Screen Flicker */}
        <div className="crt-flicker absolute inset-0 bg-white/5 opacity-[0.02] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
}
