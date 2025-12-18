import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Terminal, FolderGit2, User, Mail, Power } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", icon: Terminal, label: "TERMINAL" },
    { href: "/projects", icon: FolderGit2, label: "PROJECTS" },
    { href: "/about", icon: User, label: "PROFILE" },
    { href: "/contact", icon: Mail, label: "CONTACT" },
  ];

  return (
    <div className="flex h-screen flex-col md:flex-row overflow-hidden">
      {/* Sidebar / HUD */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-card/50 backdrop-blur-sm p-4 flex flex-col justify-between z-20">
        <div>
          <div className="mb-8 border border-primary/30 p-2 bg-black/40">
            <h1 className="text-xl font-display font-bold text-primary tracking-widest text-glow">
              DEV_OS v9.2
            </h1>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              STATUS: <span className="text-green-500 animate-pulse">ONLINE</span>
            </p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.href} href={item.href}>
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-mono transition-all duration-200 border border-transparent",
                      isActive 
                        ? "bg-primary/10 text-primary border-primary shadow-[0_0_10px_rgba(0,255,65,0.2)]" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/10"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className={cn(isActive && "font-bold tracking-wider")}>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    )}
                  </button>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto pt-8 border-t border-border/50">
           <div className="text-[10px] text-muted-foreground font-tech leading-relaxed">
             MEMORY: 64TB OK<br/>
             CPU: QUANTUM CORE<br/>
             NET: SECURE LINK
           </div>
           <div className="mt-4 flex items-center gap-2 text-destructive cursor-not-allowed opacity-50">
             <Power className="w-4 h-4" />
             <span className="text-xs font-mono">SHUTDOWN</span>
           </div>
        </div>
      </aside>

      {/* Main Viewport */}
      <main className="flex-1 overflow-auto relative z-10 p-4 md:p-8 scrollbar-hide">
        <div className="max-w-6xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
