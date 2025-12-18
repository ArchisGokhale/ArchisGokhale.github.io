import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "NEON_ENGINE",
    description: "High-performance WebGL rendering engine built for handling 1M+ particles in real-time.",
    tags: ["WebGL", "Three.js", "GLSL", "React"],
    stats: "PERF: 60FPS // RAM: 120MB",
    status: "STABLE"
  },
  {
    id: 2,
    title: "CYBER_DASH",
    description: "Next-gen automotive HMI dashboard interface prototype for electric vehicles.",
    tags: ["React", "Framer Motion", "SVG", "Canvas"],
    stats: "LATENCY: <16ms // TOUCH: ENABLED",
    status: "BETA"
  },
  {
    id: 3,
    title: "VOID_TERMINAL",
    description: "Browser-based SSH client with retro CRT effects and WebSocket tunneling.",
    tags: ["TypeScript", "Node.js", "xterm.js", "WebSockets"],
    stats: "ENC: AES-256 // CONN: SECURE",
    status: "LIVE"
  },
  {
    id: 4,
    title: "SYNTH_WAVE_GEN",
    description: "Procedural audio synthesizer and visualizer using Web Audio API.",
    tags: ["Web Audio", "Canvas 2D", "AudioWorklet"],
    stats: "FREQ: 44.1kHz // OSC: 4",
    status: "OFFLINE"
  }
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between border-b border-primary/20 pb-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground tracking-wider glitch-text" data-text="PROJECT_DATABASE">
            PROJECT_DATABASE
          </h2>
          <p className="text-xs font-mono text-muted-foreground mt-1">ACCESS LEVEL: PUBLIC</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs font-mono text-primary animate-pulse">SYNCING...</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-black/50 border-primary/20 backdrop-blur-md hover:border-primary/60 transition-colors group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                 <Code2 className="w-12 h-12 text-primary/10" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-display text-xl text-primary group-hover:text-glow transition-all">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="font-mono text-[10px] border-primary/30 text-primary">
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="font-mono text-xs text-muted-foreground">
                  ID: 00{project.id} // {project.stats}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-foreground/80 font-mono leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-white/5 pt-4 flex justify-between">
                <button className="text-xs font-mono flex items-center gap-2 hover:text-primary transition-colors">
                  <Github className="w-4 h-4" /> VIEW_SOURCE
                </button>
                <button className="text-xs font-mono flex items-center gap-2 hover:text-accent transition-colors">
                  <ExternalLink className="w-4 h-4" /> EXECUTE
                </button>
              </CardFooter>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
