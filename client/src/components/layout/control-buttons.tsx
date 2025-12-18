import { Moon, Sun, Volume2, VolumeX } from "lucide-react";

interface ControlButtonsProps {
  theme: 'dark' | 'light';
  soundEnabled: boolean;
  onThemeToggle: () => void;
  onSoundToggle: () => void;
}

export function ControlButtons({ 
  theme, 
  soundEnabled, 
  onThemeToggle, 
  onSoundToggle 
}: ControlButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onThemeToggle}
        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 rounded-sm transition-all"
        title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      >
        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        <span className="hidden lg:inline">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
      </button>
      <button
        onClick={onSoundToggle}
        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 rounded-sm transition-all"
        title={soundEnabled ? 'Mute' : 'Unmute'}
      >
        {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        <span className="hidden lg:inline">{soundEnabled ? 'SOUND' : 'MUTE'}</span>
      </button>
    </div>
  );
}
