import { motion } from "framer-motion";
import { ArrowRight, Zap, Target } from "lucide-react";
import { CompanyShowcase } from "@/components/company-showcase";

export default function Home() {
  return (
    <div className="space-y-10 pb-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {/* Main Hero */}
        <div className="lg:col-span-2 steam-panel p-5 lg:p-10 border border-secondary/40 rounded-lg">
          <div className="space-y-4 lg:space-y-6">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl lg:text-6xl font-display font-bold text-glow"
            >
              ARCHIS GOKHALE
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm lg:text-xl text-secondary font-mono tracking-wide font-semibold"
            >
              Software Engineer • Systems Builder • ISRO Award Winner
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm lg:text-lg leading-relaxed text-foreground/85 max-w-2xl"
            >
              Architecting resilient infrastructure and shipping production systems. Specialized in low-latency systems, cloud automation, and AI pipelines. Led ISRO SIH 2024 Gold—processing 40% faster. Currently @Northern Trust.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col lg:flex-row gap-2 lg:gap-4 pt-2 lg:pt-4"
            >
              <button className="flex items-center justify-center lg:justify-start gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-primary/15 border border-primary/60 text-primary font-mono text-xs lg:text-base font-bold hover:bg-primary/25 transition-all rounded-sm">
                <Zap className="w-4 lg:w-5 h-4 lg:h-5" />
                View Work
                <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
              </button>
              <button className="flex items-center justify-center lg:justify-start gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-secondary/15 border border-secondary/60 text-secondary font-mono text-xs lg:text-base font-bold hover:bg-secondary/25 transition-all rounded-sm">
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="steam-panel p-8 border border-accent/40 rounded-lg"
          >
            <div className="text-4xl font-bold text-accent text-glow-accent">75K+</div>
            <p className="text-base text-muted-foreground mt-3 font-mono">ISRO Award Value</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="steam-panel p-8 border border-primary/40 rounded-lg"
          >
            <div className="text-4xl font-bold text-primary text-glow">4</div>
            <p className="text-base text-muted-foreground mt-3 font-mono">FAANG / Scale-up Internships</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="steam-panel p-8 border border-secondary/40 rounded-lg"
          >
            <div className="text-4xl font-bold text-secondary text-glow-secondary">Top 7.4%</div>
            <p className="text-base text-muted-foreground mt-3 font-mono">Buildspace S5</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Company Showcase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="steam-panel border border-border/30 p-8 rounded-lg"
      >
        <CompanyShowcase />
      </motion.div>

      {/* Quick Overview */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="steam-panel p-8 border border-border/30 rounded-lg">
          <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-3">
            <Target className="w-6 h-6" />
            CORE STRENGTHS
          </h3>
          <ul className="space-y-3 text-base text-foreground/85 font-mono">
            <li className="flex gap-3"><span className="text-primary font-bold">→</span> <span>Distributed Systems & Cloud Infrastructure</span></li>
            <li className="flex gap-3"><span className="text-accent font-bold">→</span> <span>Automation & Infrastructure as Code</span></li>
            <li className="flex gap-3"><span className="text-secondary font-bold">→</span> <span>AI Pipeline Engineering & MLOps</span></li>
            <li className="flex gap-3"><span className="text-primary font-bold">→</span> <span>Low-Latency Systems & Performance Optimization</span></li>
          </ul>
        </div>

        <div className="steam-panel p-8 border border-border/30 rounded-lg">
          <h3 className="text-2xl font-display font-bold text-secondary mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6" />
            QUICK STATS
          </h3>
          <div className="grid grid-cols-2 gap-6 text-base font-mono">
            <div>
              <div className="text-primary font-bold text-lg">GPA: 9.32/10</div>
              <div className="text-muted-foreground text-base">MIT Pune '26</div>
            </div>
            <div>
              <div className="text-accent font-bold text-lg">40% Faster</div>
              <div className="text-muted-foreground text-base">ISRO Pipeline</div>
            </div>
            <div>
              <div className="text-secondary font-bold text-lg">35% MTTR ↓</div>
              <div className="text-muted-foreground text-base">Disaster Recovery</div>
            </div>
            <div>
              <div className="text-primary font-bold text-lg">1M+ Events</div>
              <div className="text-muted-foreground text-base">ETL @ Beats</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
