import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CRTWrapperProps {
  children: ReactNode;
}

export function CRTWrapper({ children }: CRTWrapperProps) {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden font-mono text-primary selection:bg-primary selection:text-background">
      {/* CRT Screen Effects */}
      <div className="scanlines pointer-events-none fixed inset-0 z-50 opacity-20" />
      <div className="crt-flicker pointer-events-none fixed inset-0 z-50 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-5" />
      
      {/* Vignette */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
      
      {/* Screen Curvature (Subtle) */}
      <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}
