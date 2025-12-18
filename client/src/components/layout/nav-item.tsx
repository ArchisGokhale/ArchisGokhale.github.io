import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavItem({ href, icon: Icon, label, isActive, onClick }: NavItemProps) {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-3 text-sm font-mono font-semibold transition-all duration-200 border rounded-sm",
          isActive 
            ? "bg-primary/15 text-primary border-primary/60 shadow-[0_0_12px_rgba(255,107,26,0.2)]" 
            : "text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/20"
        )}
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
        <span className="tracking-widest">{label}</span>
        {isActive && (
          <span className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
        )}
      </button>
    </Link>
  );
}
