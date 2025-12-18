import { createContext, useContext, useState, ReactNode } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  play: (type: 'click' | 'hover' | 'scroll' | 'success') => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: true,
  toggleSound: () => {},
  play: () => {},
});

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const newValue = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('soundEnabled', String(newValue));
      }
      return newValue;
    });
  };

  const play = (type: 'click' | 'hover' | 'scroll' | 'success') => {
    if (!soundEnabled || typeof window === 'undefined') return;

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      const frequencies: Record<typeof type, number> = {
        click: 800,
        hover: 600,
        scroll: 400,
        success: 1000,
      };

      const durations: Record<typeof type, number> = {
        click: 0.1,
        hover: 0.05,
        scroll: 0.03,
        success: 0.2,
      };

      oscillator.frequency.value = frequencies[type];
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + durations[type]);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + durations[type]);
    } catch (e) {
      // Audio context error
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, play }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
