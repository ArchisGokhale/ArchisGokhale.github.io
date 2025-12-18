import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Code2, FolderGit2, User, Mail, Trophy, Download, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useSound } from "@/hooks/use-sound";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, toggleSound, play } = useSound();

  const navItems = [
    { href: "/", icon: Code2, label: "PORTFOLIO" },
    { href: "/projects", icon: FolderGit2, label: "PROJECTS" },
    { href: "/experience", icon: Trophy, label: "EXPERIENCE" },
    { href: "/about", icon: User, label: "ABOUT" },
    { href: "/contact", icon: Mail, label: "CONTACT" },
  ];

  const handleThemeToggle = () => {
    play('click');
    toggleTheme();
  };

  const handleSoundToggle = () => {
    play('click');
    toggleSound();
  };

  const handleNavClick = () => {
    play('click');
  };

  return (
    <div className={cn(
      "flex h-screen flex-col md:flex-row overflow-hidden transition-colors duration-300",
      theme === 'dark' ? 'bg-background dark' : 'bg-background light'
    )}>
      {/* Top Controls - Mobile */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-border bg-card/50 backdrop-blur-sm z-30">
        <h1 className="text-xl font-display font-bold text-primary">ARCHIS</h1>
        <div className="flex gap-2">
          <button
            onClick={handleThemeToggle}
            className="p-2 hover:bg-primary/20 rounded-sm transition-colors"
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={handleSoundToggle}
            className="p-2 hover:bg-primary/20 rounded-sm transition-colors"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-border bg-gradient-to-b from-card to-background/50 px-6 py-6 flex flex-col justify-between z-20 backdrop-blur-md md:flex">
        <div>
          <div className="mb-8 gradient-border p-5 bg-card/80 border border-primary/30 rounded-sm">
            <h1 className="text-3xl font-display font-bold text-primary tracking-wider text-glow">
              ARCHIS
            </h1>
            <p className="text-sm text-accent font-mono mt-2 font-bold">
              SDE • ML SYSTEMS • INFRA
            </p>
            <p className="text-sm text-muted-foreground font-mono mt-3 leading-relaxed">
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
                    onClick={handleNavClick}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-mono font-semibold transition-all duration-200 border rounded-sm",
                      isActive 
                        ? "bg-primary/15 text-primary border-primary/60 shadow-[0_0_12px_rgba(255,107,26,0.2)]" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/20"
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="tracking-widest hidden md:inline">{item.label}</span>
                    <span className="tracking-widest md:hidden">{item.label.slice(0, 3)}</span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </button>
                </Link>
              );
            })}
          </nav>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 hidden md:block" />

          <div className="space-y-3 hidden md:block">
            <div className="text-sm text-muted-foreground font-tech leading-relaxed space-y-2">
              <p><span className="text-secondary">»</span> Java • Python • TypeScript</p>
              <p><span className="text-primary">»</span> Spring Boot • React • Node.js</p>
              <p><span className="text-accent">»</span> Terraform • Docker • AWS/Azure</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 border-t border-border/30 pt-4 hidden md:block">
          <a href="#" onClick={handleNavClick} className="flex items-center gap-2 text-sm font-mono text-secondary hover:text-primary transition-colors">
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
          <div className="text-sm text-muted-foreground/60">
            Pune, India • Open to opportunities
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-4" />
          
          <div className="flex gap-2 pt-4">
            <button
              onClick={handleThemeToggle}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 rounded-sm transition-all"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="hidden lg:inline">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
            </button>
            <button
              onClick={handleSoundToggle}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 rounded-sm transition-all"
              title={soundEnabled ? 'Mute' : 'Unmute'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden lg:inline">{soundEnabled ? 'SOUND' : 'MUTE'}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative z-10 px-6 py-8 md:px-8" onScroll={() => play('scroll')}>
        <div className="max-w-6xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
