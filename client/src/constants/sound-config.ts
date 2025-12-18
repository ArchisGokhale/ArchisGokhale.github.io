export type SoundType = 'click' | 'hover' | 'scroll' | 'success';

export interface SoundConfig {
  freq1: number;
  freq2: number;
  duration: number;
  waveform: OscillatorType;
}

export const SOUND_CONFIGS: Record<SoundType, SoundConfig> = {
  click: { freq1: 800, freq2: 1200, duration: 0.12, waveform: 'sine' },
  hover: { freq1: 600, freq2: 900, duration: 0.08, waveform: 'sine' },
  scroll: { freq1: 400, freq2: 600, duration: 0.05, waveform: 'triangle' },
  success: { freq1: 1000, freq2: 1500, duration: 0.25, waveform: 'sine' },
};

export const SOUND_CONSTANTS = {
  MASTER_GAIN: 0.25,
  MASTER_GAIN_END: 0.01,
  OSC1_GAIN: 0.6,
  OSC2_GAIN: 0.4,
};
