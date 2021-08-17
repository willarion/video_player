import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Controls} from "../Controls/Controls";
import {calculateMinSec} from "../../utils/calculateMinSec";

const VideoWrapper = styled.div`
  width: 60%;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
  box-shadow: 0px 0px 10px 1px rgb(3 6 8);
`
const StyledVideo = styled.video`
  width: 100%;
  display: block;
`

export const Video: React.FC = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

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

  const handleTime = (): void => {
    if (vidRef.current) {
      setCurrentTime(calculateMinSec(vidRef.current.currentTime));
    }
  }

  const handleDuration = (): void => {
    if (vidRef.current) {
      setDuration(calculateMinSec(vidRef.current.duration));
    }
  }

  return (
    <VideoWrapper>
      <StyledVideo
        ref={vidRef}
        onTimeUpdate={handleTime}
        onLoadedData={handleDuration}
      >
        <source src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </StyledVideo>
      <Controls
        handlePlayPause={handlePlayPauseVideo}
        handleStop={handleStopVideo}
        paused={paused}
        currentTime={currentTime}
        duration={duration}
      />
    </VideoWrapper>
  )
}