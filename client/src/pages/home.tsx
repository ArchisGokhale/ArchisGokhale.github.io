import { motion } from "framer-motion";
import { ArrowRight, Zap, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8 pb-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Main Hero */}
        <div className="md:col-span-2 steam-panel p-8 border border-secondary/40">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-display font-bold text-glow"
            >
              ARCHIS GOKHALE
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-secondary font-mono tracking-wide"
            >
              Software Engineer • Systems Builder • ISRO Award Winner
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm leading-relaxed text-foreground/80 max-w-xl"
            >
              Architecting resilient infrastructure and shipping production systems. Specialized in low-latency systems, cloud automation, and AI pipelines. Led ISRO SIH 2024 Gold—processing 40% faster. Currently @Northern Trust.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-primary/15 border border-primary/60 text-primary font-mono text-sm hover:bg-primary/25 transition-all">
                <Zap className="w-4 h-4" />
                View Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-secondary/15 border border-secondary/60 text-secondary font-mono text-sm hover:bg-secondary/25 transition-all">
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Placeholder for profile image */}
          <div className="mt-8 aspect-video bg-muted/20 border border-dashed border-border rounded-sm flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-mono">[Hero Image / Video - Add your photo here]</span>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="steam-panel p-6 border border-accent/40"
          >
            <div className="text-3xl font-bold text-accent text-glow-accent">75K+</div>
            <p className="text-xs text-muted-foreground mt-2">ISRO Award Value</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="steam-panel p-6 border border-primary/40"
          >
            <div className="text-3xl font-bold text-primary text-glow">4</div>
            <p className="text-xs text-muted-foreground mt-2">FAANG / Scale-up Internships</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="steam-panel p-6 border border-secondary/40"
          >
            <div className="text-3xl font-bold text-secondary text-glow-secondary">Top 7.4%</div>
            <p className="text-xs text-muted-foreground mt-2">Buildspace S5</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Overview */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="steam-panel p-6 border border-border/30">
          <h3 className="text-sm font-display font-bold text-primary mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            CORE STRENGTHS
          </h3>
          <ul className="space-y-2 text-xs text-foreground/80 font-mono">
            <li className="flex gap-2"><span className="text-primary">→</span> <span>Distributed Systems & Cloud Infrastructure</span></li>
            <li className="flex gap-2"><span className="text-accent">→</span> <span>Automation & Infrastructure as Code</span></li>
            <li className="flex gap-2"><span className="text-secondary">→</span> <span>AI Pipeline Engineering & MLOps</span></li>
            <li className="flex gap-2"><span className="text-primary">→</span> <span>Low-Latency Systems & Performance Optimization</span></li>
          </ul>
        </div>

        <div className="steam-panel p-6 border border-border/30">
          <h3 className="text-sm font-display font-bold text-secondary mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            QUICK STATS
          </h3>
          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <div className="text-primary font-bold">GPA: 9.32/10</div>
              <div className="text-muted-foreground">MIT Pune '26</div>
            </div>
            <div>
              <div className="text-accent font-bold">40% Faster</div>
              <div className="text-muted-foreground">ISRO Pipeline</div>
            </div>
            <div>
              <div className="text-secondary font-bold">35% MTTR ↓</div>
              <div className="text-muted-foreground">Disaster Recovery</div>
            </div>
            <div>
              <div className="text-primary font-bold">1M+ Events</div>
              <div className="text-muted-foreground">ETL @ Beats</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
