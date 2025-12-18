import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Code2, FolderGit2, User, Mail, Trophy, Download } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", icon: Code2, label: "PORTFOLIO" },
    { href: "/projects", icon: FolderGit2, label: "PROJECTS" },
    { href: "/experience", icon: Trophy, label: "EXPERIENCE" },
    { href: "/about", icon: User, label: "ABOUT" },
    { href: "/contact", icon: Mail, label: "CONTACT" },
  ];

  return (
    <div className="flex h-screen flex-col md:flex-row overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-full md:w-72 border-b md:border-b-0 md:border-r border-border bg-gradient-to-b from-card to-background/50 p-4 md:p-6 flex flex-col justify-between z-20 backdrop-blur-md">
        <div>
          <div className="mb-8 gradient-border p-4 bg-card/80 border border-primary/30">
            <h1 className="text-2xl font-display font-bold text-primary tracking-wider text-glow">
              ARCHIS
            </h1>
            <p className="text-xs text-accent font-mono mt-2 font-bold">
              SDE • ML SYSTEMS • INFRA
            </p>
            <p className="text-[11px] text-muted-foreground font-mono mt-3 leading-tight">
              Building resilient systems at scale. ISRO SIH Winner. Ex @NorthernTrust, @Beats, @Buildspace.
            </p>
          </div>

          <nav className="space-y-2 mb-8">
            {navItems.map((item) => {
              const isActive = location === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.href} href={item.href}>
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 text-xs font-mono transition-all duration-200 border rounded-sm",
                      isActive 
                        ? "bg-primary/15 text-primary border-primary/60 shadow-[0_0_12px_rgba(255,107,26,0.2)]" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/20"
                    )}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-semibold tracking-widest">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </button>
                </Link>
              );
            })}
          </nav>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

          <div className="space-y-3">
            <div className="text-[10px] text-muted-foreground font-tech leading-relaxed space-y-1">
              <p><span className="text-secondary">»</span> Java • Python • TypeScript</p>
              <p><span className="text-primary">»</span> Spring Boot • React • Node.js</p>
              <p><span className="text-accent">»</span> Terraform • Docker • AWS/Azure</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 border-t border-border/30 pt-4">
          <a href="#" className="flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors">
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
          <div className="text-[9px] text-muted-foreground/60">
            Pune, India • Open to opportunities
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
