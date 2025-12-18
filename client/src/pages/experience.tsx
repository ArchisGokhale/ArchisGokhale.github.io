import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Trophy, TrendingUp } from "lucide-react";
import { CompanyShowcase } from "@/components/company-showcase";
import northernTrust from '@assets/stock_images/northern_trust_compa_4dd19ad9.jpg';
import beatsDre from '@assets/stock_images/apple_beats_by_dre_l_b48c2ee7.jpg';
import buildspace from '@assets/stock_images/buildspace_logo_star_82a93f8f.jpg';

const EXPERIENCES = [
  {
    id: 1,
    role: "SDE Intern – Platform Engineering / Resilience",
    company: "Northern Trust",
    logo: northernTrust,
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
    logo: beatsDre,
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
    logo: buildspace,
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
    <div className="space-y-8 pb-8">
      <header>
        <h2 className="text-3xl font-display font-bold text-foreground tracking-wider">CAREER</h2>
        <p className="text-xs font-mono text-muted-foreground mt-2">
          FAANG & Scale-ups | Infrastructure • AI/ML • Full-Stack | Award-Winning
        </p>
      </header>

      {/* Work Experience with Logos */}
      <div className="space-y-6">
        <h3 className="text-lg font-display font-bold text-primary">WORK EXPERIENCE</h3>
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="steam-panel border border-border/30 p-6 hover:border-primary/40 transition-all group"
          >
            <div className="flex items-start gap-6">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 steam-panel border border-border/30 rounded-sm p-2 flex items-center justify-center group-hover:border-primary/60 transition-all">
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-lg font-mono font-bold text-primary mb-1 group-hover:text-glow transition-all">
                  {exp.role}
                </h4>
                <p className="text-sm font-display text-foreground mb-2">{exp.company}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-xs text-foreground/80 leading-relaxed">
                      <span className="text-primary font-bold mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Companies Showcase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="steam-panel border border-secondary/30 p-6"
      >
        <CompanyShowcase />
      </motion.div>

      {/* Education & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="steam-panel border border-accent/30 p-6"
        >
          <h3 className="text-lg font-display font-bold text-accent mb-4">EDUCATION</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-mono font-bold text-foreground">B.Tech – Computer Science & Engineering</h4>
              <p className="text-sm text-foreground/80">MIT World Peace University</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-accent font-bold">GPA: 9.32/10</span> • Aug 2022 – Jul 2026 • Pune, India
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="steam-panel border border-secondary/30 p-6"
        >
          <h3 className="text-lg font-display font-bold text-secondary mb-4">TECHNICAL SKILLS</h3>
          <div className="space-y-3 text-xs font-mono">
            <div>
              <span className="text-secondary font-bold">Languages:</span>
              <p className="text-foreground/80 mt-1">Java, Python, TypeScript, C++, SQL, JavaScript</p>
            </div>
            <div>
              <span className="text-secondary font-bold">Frameworks:</span>
              <p className="text-foreground/80 mt-1">Spring Boot, React, Node.js, Flask, Express</p>
            </div>
            <div>
              <span className="text-secondary font-bold">DevOps:</span>
              <p className="text-foreground/80 mt-1">Terraform, Ansible, Docker, Kubernetes, GitHub Actions</p>
            </div>
            <div>
              <span className="text-secondary font-bold">Cloud:</span>
              <p className="text-foreground/80 mt-1">AWS, Azure, Power BI, GCP Lambda</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-lg font-display font-bold text-primary mb-4">KEY ACHIEVEMENTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="steam-panel border border-accent/30 p-4 flex gap-4"
              >
                <Icon className="w-8 h-8 text-accent flex-shrink-0 opacity-60" />
                <div>
                  <h4 className="font-mono font-bold text-foreground text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-foreground/70">{achievement.desc}</p>
                  <p className="text-[10px] text-muted-foreground mt-2">{achievement.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
