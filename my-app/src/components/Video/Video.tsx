import React, { useRef } from 'react';
import styled from "styled-components";
import { Controls } from "../Controls/Controls";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators, State } from "../../state";
import { bindActionCreators } from "redux";
import { useMuteVideo } from "../../hooks/useMuteVideo";
import { usePlayPauseStopVideo } from "../../hooks/usePlayPauseStopVideo";
import { FsElementSafari } from "../../models/FsElementSafari";

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
  height: calc(100% - 40px);
  display: block;
`

export const Video: React.FC = () => {
  const dispatch = useDispatch();
  const { measureDuration, rewindVideo } = bindActionCreators(ActionCreators, dispatch);
  const state = useSelector((state: State) => state.settings);

  const vidRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { muted, handleMuteState } = useMuteVideo();
  const { paused, handlePlayPauseVideo, handleStopVideo } = usePlayPauseStopVideo(vidRef);

  const handleDuration = (): void => {
    if (vidRef.current) {
      measureDuration(Math.floor(vidRef.current.duration));
    }
  }

  const handleTime = (): void => {
    if (vidRef.current) {
      rewindVideo(Math.floor(vidRef.current.currentTime));
    }
  }

  const handleVolume = (value: number): void => {
    if (vidRef.current) {
      vidRef.current.volume = value;
    }
  }

  const handleVideoRewind = (value: number): void => {
    if (vidRef.current) {
      vidRef.current.currentTime = value;
    }
  }

  const handleFullscreen = (): void => {
    if (wrapperRef.current) {
      if (wrapperRef.current.requestFullscreen) {
        wrapperRef.current.requestFullscreen();
      } else { /* Safari */
        const ref = wrapperRef.current as FsElementSafari;

        if (ref.webkitRequestFullscreen) {
          ref.webkitRequestFullscreen();
        }
      }
    }
  }

  return (
    // <div ref={wrapperRef}>
    <VideoWrapper ref={wrapperRef}>
      <StyledVideo
        ref={vidRef}
        onTimeUpdate={handleTime}
        onLoadedData={handleDuration}
        muted={muted}
        onClick={handlePlayPauseVideo}
      >
        <source src={state.src} type="video/mp4" />
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
    // </div>
  )
}