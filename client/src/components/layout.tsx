import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Code2, FolderGit2, User, Mail, Trophy, Download, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useLayoutControls } from "@/hooks/use-layout-controls";
import { NAV_ITEMS, TECH_SKILLS, USER_INFO } from "@/constants/layout-config";
import { NavItem } from "./layout/nav-item";
import { ControlButtons } from "./layout/control-buttons";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { theme, soundEnabled, handleThemeToggle, handleSoundToggle, handleNavClick, playSound } = useLayoutControls();

  const iconMap = {
    PORTFOLIO: Code2,
    PROJECTS: FolderGit2,
    EXPERIENCE: Trophy,
    ABOUT: User,
    CONTACT: Mail,
  } as const;

  return (
    <div className={cn(
      "flex h-screen flex-col lg:flex-row overflow-hidden transition-colors duration-300",
      theme === 'dark' ? 'bg-background dark' : 'bg-background light'
    )}>
      {/* Top Controls - Mobile */}
      <div className="lg:hidden flex justify-between items-center px-3 py-2 border-b border-border bg-card/50 backdrop-blur-sm z-30 gap-2">
        <h1 className="text-sm lg:text-xl font-display font-bold text-primary">{USER_INFO.name}</h1>
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
      <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-border bg-gradient-to-b from-card to-background/50 px-4 lg:px-6 py-4 lg:py-6 flex flex-col justify-between z-20 backdrop-blur-md max-h-[40vh] lg:max-h-screen overflow-y-auto lg:overflow-visible">
        <div>
          <div className="mb-4 lg:mb-8 gradient-border p-3 lg:p-5 bg-card/80 border border-primary/30 rounded-sm">
            <h1 className="text-lg lg:text-3xl font-display font-bold text-primary tracking-wider text-glow">
              {USER_INFO.name}
            </h1>
            <p className="text-xs lg:text-sm text-accent font-mono mt-1 lg:mt-2 font-bold">
              {USER_INFO.title}
            </p>
            <p className="text-xs lg:text-sm text-muted-foreground font-mono mt-2 lg:mt-3 leading-relaxed">
              {USER_INFO.bio}
            </p>
          </div>

          <nav className="space-y-1 lg:space-y-2 mb-4 lg:mb-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location === item.href;
              const Icon = iconMap[item.label as keyof typeof iconMap];
              
              return (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={Icon}
                  label={item.label}
                  isActive={isActive}
                  onClick={handleNavClick}
                />
              );
            })}
          </nav>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4 lg:mb-6 hidden lg:block" />

          <div className="space-y-2 lg:space-y-3 hidden lg:block">
            <div className="text-xs lg:text-sm text-muted-foreground font-tech leading-relaxed space-y-1 lg:space-y-2">
              <p><span className="text-secondary">»</span> {TECH_SKILLS.languages}</p>
              <p><span className="text-primary">»</span> {TECH_SKILLS.frameworks}</p>
              <p><span className="text-accent">»</span> {TECH_SKILLS.infrastructure}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 border-t border-border/30 pt-4 hidden lg:block">
          <a href="#" onClick={handleNavClick} className="flex items-center gap-2 text-sm font-mono text-secondary hover:text-primary transition-colors">
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
          <div className="text-sm text-muted-foreground/60">
            {USER_INFO.location} • Open to opportunities
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-4" />
          
          <div className="pt-4">
            <ControlButtons 
              theme={theme}
              soundEnabled={soundEnabled}
              onThemeToggle={handleThemeToggle}
              onSoundToggle={handleSoundToggle}
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative z-10 px-3 py-4 lg:px-8 lg:py-8" onScroll={() => playSound('scroll')}>
        <div className="max-w-6xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
