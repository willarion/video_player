export interface ControlsProps {
  handlePlayPause: () => void;
  handleStop: () => void;
  paused: boolean;
  handleFullscreen: () => void;
  handleMuteState: () => void;
  muted: boolean;
  handleVolume: (value: number) => void;
  handleVideoRewind: (value: number) => void;
}