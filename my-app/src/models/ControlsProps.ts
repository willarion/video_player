import React from "react";

export interface ControlsProps {
  handlePlayPause: () => void;
  handleStop: () => void;
  paused: boolean;
  currentTime: string | null;
  currentTimeInSec: number;
  duration: string | null;
  durationInSec: number;
  handleFullscreen: () => void;
  handleMuteState: () => void;
  muted: boolean;
  handleVolume: (event: React.ChangeEvent<HTMLInputElement>) => void;
  volume: number;
  handleVideoRewind: (event: React.ChangeEvent<HTMLInputElement>) => void;
  volumePercent?: number;
  maxVolume?: number;
}