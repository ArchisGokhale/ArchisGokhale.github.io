import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Trophy, TrendingUp } from "lucide-react";
import { CompanyShowcase } from "@/components/company-showcase";

const EXPERIENCES = [
  {
    id: 1,
    role: "SDE Intern – Platform Engineering / Resilience",
    company: "Northern Trust",
    location: "Pune, India",
    duration: "Jun 2025 – Present",
    highlights: [
      "Developed cross-region disaster-recovery-as-code for 40+ systems using Terraform & Ansible",
      "Reduced MTTR by 35% with idempotent recovery workflows and canary rollbacks",
      "Engineered real-time RTO/RPO telemetry pipelines via Azure SQL & Power BI",
      "Improved resilience visibility and executive reporting accuracy by 50%"
    ]
  },
  {
    id: 2,
    role: "SDE Intern – Data & Product Engineering",
    company: "Beats by Dre (Apple)",
    location: "Remote / San Francisco, USA",
    duration: "Sep 2024 – Oct 2024",
    highlights: [
      "Built production-grade ETL pipelines processing 1M+ daily user events",
      "Segmented Gen Z cohorts and optimized engagement campaigns",
      "Designed CPA dashboards using Power BI + Excel PowerQuery",
      "Improved campaign ROI tracking and reporting SLAs by 40%"
    ]
  },
  {
    id: 3,
    role: "SDE Intern – Full-Stack Engineering",
    company: "Buildspace (Top 7.4%)",
    location: "San Francisco Bay, USA",
    duration: "Jun 2024 – Aug 2024",
    highlights: [
      "Built modular Java-based ERP system for healthcare inventory",
      "Implemented REST APIs, concurrency-safe batch jobs, and audit logging",
      "Reduced reconciliation time by 60% with automated workflows",
      "Dockerized CI/CD pipelines achieving 35% faster deployments"
    ]
  }
];

const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2024 – GOLD",
    desc: "ISRO Winner | Team Lead | 75K Award | Top 0.00215%",
    year: 2024,
    icon: Trophy
  },
  {
    title: "Buildspace Season 5 – Top 7.4%",
    desc: "Selected among 70K+ applicants globally",
    year: 2024,
    icon: TrendingUp
  },
  {
    title: "NASA Space Apps – Organizer",
    desc: "Led Pune chapter with 800+ participants | 12× hackathon winner",
    year: 2024,
    icon: Trophy
  }
];

export default function Experience() {
  return (
    <div className="space-y-10 pb-8">
      <header>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-wider">CAREER</h2>
        <p className="text-base font-mono text-muted-foreground mt-3">
          FAANG & Scale-ups | Infrastructure • AI/ML • Full-Stack | Award-Winning
        </p>
      </header>

      {/* Work Experience */}
      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary">WORK EXPERIENCE</h3>
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="steam-panel border border-border/30 p-8 hover:border-primary/40 transition-all group rounded-lg"
          >
            <div className="flex items-start gap-6">
              {/* Company Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 steam-panel border border-border/30 rounded-lg p-3 flex items-center justify-center group-hover:border-primary/60 transition-all">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-xl font-mono font-bold text-primary mb-2 group-hover:text-glow transition-all">
                  {exp.role}
                </h4>
                <p className="text-lg font-display text-foreground mb-3">{exp.company}</p>
                <div className="flex flex-wrap gap-4 text-base text-muted-foreground font-mono mb-5">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-base text-foreground/85 leading-relaxed">
                      <span className="text-primary font-bold flex-shrink-0">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-8">ACHIEVEMENTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="steam-panel border border-border/30 p-8 hover:border-secondary/60 transition-all rounded-lg"
              >
                <Icon className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-display font-bold text-foreground text-lg mb-3">{achievement.title}</h4>
                <p className="text-base text-foreground/75 leading-relaxed">{achievement.desc}</p>
                <p className="text-base font-mono text-muted-foreground mt-4 font-semibold">{achievement.year}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Company Showcase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="steam-panel border border-border/30 p-8 rounded-lg"
      >
        <h3 className="text-2xl md:text-3xl font-display font-bold text-accent mb-6">ORGANIZATIONS</h3>
        <CompanyShowcase />
      </motion.div>
    </div>
  );
}
