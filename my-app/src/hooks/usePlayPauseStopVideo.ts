import { useState } from "react";

export const usePlayPauseStopVideo = (vidRef: React.RefObject<HTMLVideoElement>): {
  paused: boolean,
  handlePlayPauseVideo: () => void,
  handleStopVideo: () => void,
} => {
  const [paused, setPaused] = useState(true);

  const handlePlayPauseVideo = (): void => {
    if (vidRef.current) {
      if (vidRef.current.paused) {
        vidRef.current.play();
        setPaused(false);
      }
      else {
        vidRef.current.pause();
        setPaused(true);
      }
    }
  }

  const handleStopVideo = (): void =>  {
    if (vidRef.current) {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
      setPaused(true);
    }
  }

  return { paused, handlePlayPauseVideo, handleStopVideo }
}