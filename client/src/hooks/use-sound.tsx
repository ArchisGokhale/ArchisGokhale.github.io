import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { SOUND_CONFIGS, SOUND_CONSTANTS, type SoundType } from '@/constants/sound-config';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  play: (type: SoundType) => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: true,
  toggleSound: () => {},
  play: () => {},
});

const SOUND_ENABLED_KEY = 'soundEnabled';

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initialize sound state from localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(SOUND_ENABLED_KEY);
    if (saved !== null) {
      setSoundEnabled(JSON.parse(saved));
    }
  }, []);

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const newValue = !prev;
      if (mounted) {
        localStorage.setItem(SOUND_ENABLED_KEY, JSON.stringify(newValue));
      }
      return newValue;
    });
  };

  const play = (type: SoundType) => {
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

      const config = SOUND_CONFIGS[type];
      
      oscillator1.type = config.waveform;
      oscillator2.type = config.waveform;
      oscillator1.frequency.value = config.freq1;
      oscillator2.frequency.value = config.freq2;

      masterGain.gain.setValueAtTime(SOUND_CONSTANTS.MASTER_GAIN, audioContext.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(SOUND_CONSTANTS.MASTER_GAIN_END, audioContext.currentTime + config.duration);

      gainNode.gain.setValueAtTime(SOUND_CONSTANTS.OSC1_GAIN, audioContext.currentTime);
      gainNode2.gain.setValueAtTime(SOUND_CONSTANTS.OSC2_GAIN, audioContext.currentTime);

      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + config.duration);
      oscillator2.stop(audioContext.currentTime + config.duration);
    } catch (e) {
      // Audio context error - silently fail
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
