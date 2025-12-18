import { motion } from "framer-motion";
import { User, Cpu, MapPin, Briefcase } from "lucide-react";
import generatedImage from '@assets/generated_images/dark_cyberpunk_data_stream_background_texture.png';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
      {/* Profile Card */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:col-span-1 space-y-6"
      >
        <div className="border border-primary/30 bg-black/60 p-4 relative overflow-hidden group">
          <div className="aspect-square bg-muted relative overflow-hidden border border-primary/20 mb-4">
            <img 
              src={generatedImage} 
              alt="Avatar" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            <div className="absolute inset-0 scanlines opacity-50" />
          </div>
          
          <h3 className="font-display text-xl text-white">AGENT_007</h3>
          <p className="font-mono text-xs text-primary">CREATIVE_TECHNOLOGIST</p>
          
          <div className="mt-4 space-y-2 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>SECTOR_7 // TOKYO_DISTRICT</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-3 h-3" />
              <span>FREELANCE // OPERATIVE</span>
            </div>
          </div>
        </div>

        <div className="border border-primary/30 bg-black/60 p-4">
          <h4 className="font-display text-sm text-primary mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> SKILL_MATRIX
          </h4>
          <div className="space-y-3">
            {[
              { name: "React / Next.js", level: 95 },
              { name: "Three.js / WebGL", level: 88 },
              { name: "TypeScript", level: 92 },
              { name: "UI Architecture", level: 90 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-[10px] font-mono mb-1 text-muted-foreground">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/5 w-full">
                  <div 
                    className="h-full bg-primary/60" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bio / History */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-2 border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-sm relative"
      >
        <div className="absolute top-0 right-0 px-2 py-1 bg-primary/20 text-primary text-[10px] font-mono">
          BIO.MD
        </div>

        <div className="prose prose-invert prose-sm max-w-none font-mono">
          <p className="text-lg text-primary/80 leading-relaxed">
            Over the last decade, I have deployed high-fidelity user interfaces for AAA game studios and fintech unicorns. My specialization lies at the intersection of design, performance, and interaction.
          </p>
          
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <h3 className="font-display text-white">MISSION_OBJECTIVES</h3>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            <li>Architect scalable frontend systems that withstand high-frequency updates.</li>
            <li>Bridge the gap between Figma prototypes and production WebGL renders.</li>
            <li>Eliminate layout thrashing and maintain 60FPS on low-end devices.</li>
            <li>Push the boundaries of browser-based immersion.</li>
          </ul>

          <div className="mt-8 p-4 border border-accent/20 bg-accent/5 rounded-none">
             <p className="text-accent text-xs">
               <span className="font-bold">NOTE:</span> Currently accepting new contracts for Q4 2025. Encrypted comms preferred.
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
