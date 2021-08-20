import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import { Controls } from "../Controls/Controls";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators, State} from "../../state";
import {bindActionCreators} from "redux";

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
  box-shadow: 0 0 10px 1px rgb(3 6 8);
`

const StyledVideo = styled.video`
  width: 100%;
  display: block;
`

export const Video: React.FC = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);

  const state = useSelector((state: State) => state.settings);
  const dispatch = useDispatch();
  const { measureDuration, rewindVideo } = bindActionCreators(ActionCreators, dispatch);


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

  const handleDuration = (): void => {
    if (vidRef.current) {
      measureDuration(Math.floor(vidRef.current.duration));
    }
  }

  const handleFullscreen = (): void => {
    if (vidRef.current) {
      if (vidRef.current.requestFullscreen) {
        vidRef.current.requestFullscreen();
      } else { // @ts-ignore
        if (vidRef.current.webkitRequestFullscreen) { /* Safari */
                // @ts-ignore
          vidRef.current.webkitRequestFullscreen();
        }
      }
    }
  }

  const handleMuteState = (): void => {
    setMuted(!muted);
  }

  const handleVolume = (value: number): void => {
    if (vidRef.current) {
      vidRef.current.volume = value;
    }
  }

  useEffect(() => {
    if (state.volume === 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
  }, [state.volume])

  const handleTime = (): void => {
    if (vidRef.current) {
      rewindVideo(Math.floor(vidRef.current.currentTime));
    }
  }

  const handleVideoRewind = (value: number): void => {
    if (vidRef.current) {
      vidRef.current.currentTime = value;
    }
  }


  return (
    <VideoWrapper>
      <StyledVideo
        ref={vidRef}
        onTimeUpdate={handleTime}
        onLoadedData={handleDuration}
        muted={muted}
      >
        <source src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </StyledVideo>
      <Controls
        handlePlayPause={handlePlayPauseVideo}
        handleStop={handleStopVideo}
        paused={paused}
        handleFullscreen={handleFullscreen}
        handleMuteState={handleMuteState}
        muted={muted}
        handleVolume={handleVolume}
        handleVideoRewind={handleVideoRewind}
      />
    </VideoWrapper>
  )
}