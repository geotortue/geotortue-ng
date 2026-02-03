// Basé sur le legacy GTMidi mais modernisé (Web Audio API)
export interface IGTNAudioService {
  playNote(note: number, duration: number): void;
  isEnabled(): boolean;
  setVolume(volume: number): void;
}
