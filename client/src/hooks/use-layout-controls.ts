import { useCallback } from 'react';
import { useTheme } from './use-theme';
import { useSound } from './use-sound';

export function useLayoutControls() {
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, toggleSound, play } = useSound();

  const handleThemeToggle = useCallback(() => {
    play('click');
    toggleTheme();
  }, [toggleTheme, play]);

  const handleSoundToggle = useCallback(() => {
    play('click');
    toggleSound();
  }, [toggleSound, play]);

  const handleNavClick = useCallback(() => {
    play('click');
  }, [play]);

  return {
    theme,
    soundEnabled,
    handleThemeToggle,
    handleSoundToggle,
    handleNavClick,
    playSound: play,
  };
}
