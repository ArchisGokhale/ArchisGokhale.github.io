import { motion } from "framer-motion";
import { Code2, Award, Github, ExternalLink, Zap } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "AI Frame Interpolation – ISRO",
    subtitle: "Smart India Hackathon 2024 Gold Winner",
    description: "Engineered AI-based satellite imagery interpolation using RIFE model, increasing temporal resolution from 30-min to 1-min while reducing runtime by 40%.",
    impact: "40% faster | ISRO VEDAS/MOSDAC adoption",
    tags: ["ML", "Python", "TensorFlow", "GeoServer", "Docker"],
    featured: true,
  },
  {
    id: 2,
    title: "Disaster Recovery Automation – Northern Trust",
    subtitle: "Infrastructure Resilience Platform",
    description: "Developed cross-region disaster-recovery-as-code for 40+ systems using Terraform & Ansible, reducing MTTR by 35%.",
    impact: "35% MTTR reduction | 50+ systems automated",
    tags: ["Terraform", "Ansible", "Azure", "IaC", "CI/CD"],
    featured: true,
  },
  {
    id: 3,
    title: "ETL Data Pipeline – Beats by Dre",
    subtitle: "Gen Z Cohort Segmentation & Analytics",
    description: "Built production ETL processing 1M+ user events daily for Gen Z cohort segmentation and campaign optimization.",
    impact: "1M+ events/day | 40% ROI improvement",
    tags: ["Python", "Pandas", "Power BI", "AWS", "SQL"],
    featured: false,
  },
  {
    id: 4,
    title: "ERP System – Buildspace (Top 7.4%)",
    subtitle: "Healthcare Inventory Management",
    description: "Architected modular Java-based ERP with REST APIs, concurrent batch jobs, and audit logging for healthcare inventory reconciliation.",
    impact: "60% faster reconciliation | Dockerized CI/CD",
    tags: ["Java", "Spring Boot", "Docker", "GitHub Actions"],
    featured: false,
  },
  {
    id: 5,
    title: "Kavach – AI Security Platform",
    subtitle: "Real-Time Crowd Threat Detection",
    description: "Built real-time crowd threat detection using TensorFlow & PyTorch. Automated 25% of surveillance tasks with 30% latency improvement.",
    impact: "30% latency ↓ | 10K+ concurrent users",
    tags: ["PyTorch", "TensorFlow", "P2PNet", "React", "Analytics"],
    featured: false,
  },
  {
    id: 6,
    title: "GeoHeritage Mapping – Full-Stack",
    subtitle: "4,100+ Heritage Sites Cataloging",
    description: "Developed React/Flask platform with live geofencing (50 km radius) and predictive clustering for Indian heritage site discovery.",
    impact: "99.9% uptime | 4,100+ sites indexed",
    tags: ["React", "Flask", "AWS", "Geofencing", "ML"],
    featured: false,
  }
];

export default function Projects() {
  return (
    <div className="space-y-10 pb-8">
      <header className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-wider">PORTFOLIO</h2>
          <p className="text-base font-mono text-muted-foreground mt-3">
            Selected Projects • <span className="text-primary font-bold">6 Featured</span> • Shipped to Production
          </p>
        </div>
      </header>

      {/* Featured Projects */}
      <div className="space-y-10">
        {PROJECTS.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Placeholder */}
            <div className="md:col-span-1 steam-panel border border-border/30 aspect-square flex items-center justify-center rounded-lg bg-muted/10 hover:border-primary/60 transition-all">
              <div className="text-center space-y-3">
                <Code2 className="w-12 h-12 text-muted-foreground mx-auto" />
                <p className="text-base text-muted-foreground font-mono">Image coming soon</p>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 steam-panel border border-primary/20 p-8 hover:border-primary/60 transition-all rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-base text-accent font-mono font-semibold">{project.subtitle}</p>
                </div>
                <Award className="w-6 h-6 text-primary opacity-50 flex-shrink-0" />
              </div>

              <p className="text-lg text-foreground/85 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-center gap-3 text-base text-primary font-mono font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>{project.impact}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-sm px-3 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-lg font-mono font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 justify-end pt-4 border-t border-white/5">
                <button className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors font-mono font-semibold">
                  <Github className="w-5 h-5" /> Code
                </button>
                <button className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors font-mono font-semibold">
                  <ExternalLink className="w-5 h-5" /> Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Notable Projects */}
      <div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-8">OTHER PROJECTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="steam-panel border border-border/30 p-6 hover:border-secondary/60 transition-all group rounded-lg"
            >
              <div className="w-full h-40 rounded-lg mb-4 bg-muted/10 border border-border/30 flex items-center justify-center">
                <p className="text-base text-muted-foreground font-mono">Image coming soon</p>
              </div>
              <h4 className="font-mono font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-base text-foreground/65 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-muted/30 text-muted-foreground border border-border/30 rounded-lg font-mono font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
