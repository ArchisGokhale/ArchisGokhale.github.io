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
      
      // Create layers for better sound
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const gainNode2 = audioContext.createGain();
      const masterGain = audioContext.createGain();

      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode2);
      gainNode.connect(masterGain);
      gainNode2.connect(masterGain);
      masterGain.connect(audioContext.destination);

      const configs: Record<typeof type, { freq1: number; freq2: number; duration: number; waveform: OscillatorType }> = {
        click: { freq1: 800, freq2: 1200, duration: 0.12, waveform: 'sine' },
        hover: { freq1: 600, freq2: 900, duration: 0.08, waveform: 'sine' },
        scroll: { freq1: 400, freq2: 600, duration: 0.05, waveform: 'triangle' },
        success: { freq1: 1000, freq2: 1500, duration: 0.25, waveform: 'sine' },
      };

      const config = configs[type];
      
      oscillator1.type = config.waveform;
      oscillator2.type = config.waveform;
      oscillator1.frequency.value = config.freq1;
      oscillator2.frequency.value = config.freq2;

      masterGain.gain.setValueAtTime(0.25, audioContext.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + config.duration);

      gainNode.gain.setValueAtTime(0.6, audioContext.currentTime);
      gainNode2.gain.setValueAtTime(0.4, audioContext.currentTime);

      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + config.duration);
      oscillator2.stop(audioContext.currentTime + config.duration);
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
