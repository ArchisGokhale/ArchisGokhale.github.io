import { motion } from "framer-motion";
import { Code2, Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-10 pb-8">
      <header>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-wider">ABOUT ME</h2>
        <p className="text-base font-mono text-muted-foreground mt-3">SDE | Systems Thinker | Builder</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 steam-panel border border-secondary/30 p-10 rounded-lg"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-6">WHO I AM</h3>
          
          <div className="space-y-5 text-foreground/90 leading-relaxed text-lg">
            <p>
              I'm a software engineer passionate about building resilient, scalable systems that solve real problems. Coming from MIT Pune's top-tier CS program, I've worked across infrastructure, ML, and full-stack domains—shipping production code at <span className="text-primary font-bold">Northern Trust, Apple (Beats), and Buildspace.</span>
            </p>

            <p>
              My superpower is <span className="text-accent font-bold">connecting the dots</span>—taking complex, messy infrastructure problems and turning them into elegant, automated solutions. I led Team Cloudweave to <span className="text-accent font-bold">ISRO Gold in Smart India Hackathon 2024</span> by reimagining satellite imagery processing with AI.
            </p>

            <p>
              Whether it's <span className="text-secondary font-bold">disaster recovery automation</span> that cuts MTTR by 35%, or <span className="text-primary font-bold">ETL pipelines processing 1M+ daily events</span>, I obsess over systems that don't just work—they scale.
            </p>

            <p className="pt-5 border-t border-white/10">
              Off the keyboard? Mentoring junior engineers, sketching startup ideas, and playing cricket. I believe the best code is written by teams with shared ownership.
            </p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="steam-panel border border-primary/30 p-6 rounded-lg">
            <a href="https://linkedin.com/in/archisgokhale" target="_blank" rel="noopener noreferrer" className="block">
              <h4 className="font-mono font-bold text-primary text-lg mb-2 hover:text-glow transition-all">LinkedIn</h4>
              <p className="text-base text-foreground/70">9,000+ followers • Open to work</p>
            </a>
          </div>

          <div className="steam-panel border border-secondary/30 p-6 rounded-lg">
            <a href="https://github.com/ArchisGokhale" target="_blank" rel="noopener noreferrer" className="block">
              <h4 className="font-mono font-bold text-secondary text-lg mb-2 hover:text-glow-secondary transition-all">GitHub</h4>
              <p className="text-base text-foreground/70">Public repositories • Active contributor</p>
            </a>
          </div>

          <div className="steam-panel border border-accent/30 p-6 rounded-lg">
            <h4 className="font-mono font-bold text-accent text-lg mb-2">Email</h4>
            <p className="text-base text-foreground/70">archisgokhale001@gmail.com</p>
          </div>

          <div className="steam-panel border border-border/30 p-6 rounded-lg">
            <h4 className="font-mono font-bold text-muted-foreground text-lg mb-2">Phone</h4>
            <p className="text-base text-foreground/70">+91 86987 62960</p>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="steam-panel border border-border/30 p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-bold text-foreground text-lg mb-3">Problem-Solver Mindset</h4>
              <p className="text-base text-foreground/70 leading-relaxed">I don't just write code—I solve problems. Every solution is architected with scalability, maintainability, and user impact in mind.</p>
            </div>
          </div>
        </div>

        <div className="steam-panel border border-border/30 p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <Code2 className="w-7 h-7 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-bold text-foreground text-lg mb-3">Systems Thinking</h4>
              <p className="text-base text-foreground/70 leading-relaxed">From low-level concurrency to distributed cloud systems, I understand how pieces fit together and where optimization opportunities lie.</p>
            </div>
          </div>
        </div>

        <div className="steam-panel border border-border/30 p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <Target className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-bold text-foreground text-lg mb-3">Results-Driven</h4>
              <p className="text-base text-foreground/70 leading-relaxed">I measure success by impact: 35% MTTR reduction, 40% pipeline acceleration, 1M+ events/day processed cleanly.</p>
            </div>
          </div>
        </div>

        <div className="steam-panel border border-border/30 p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <Users className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-bold text-foreground text-lg mb-3">Team First</h4>
              <p className="text-base text-foreground/70 leading-relaxed">Led Team Cloudweave to national victory. Strong advocate for clear documentation, knowledge sharing, and collective ownership.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
