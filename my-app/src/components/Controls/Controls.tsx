import React from 'react';
import styled from 'styled-components';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import stop from '../../images/stop.svg';
import fullscreen from '../../images/fullscreen.svg';
import {ProgressBar} from "../ProgressBar/ProgressBar";
import {ButtonsWrap} from "../ButtonsWrap/ButtonsWrap";
import {ControlsGroup} from "../ControlsGroup/ControlsGroup";
import {TimeDisplay} from "../TimeDisplay/TimeDisplay";
import {Button} from "../Button/Button";
import {VolumeBlock} from "../VolumeBlock/VolumeBlock"
import {ControlsProps} from "../../models/ControlsProps";
import {useBarColor} from "../../hooks/useBarColor";

const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Controls: React.FC<ControlsProps> = ({ handlePlayPause, handleStop, paused, currentTime, currentTimeInSec, duration, durationInSec, handleFullscreen, handleMuteState, muted, handleVolume, volume, handleVideoRewind }) => {

  const maxVolume = 1;

  const timePercent = useBarColor(currentTimeInSec, durationInSec);
  const volumePercent = useBarColor(volume, maxVolume);

  return (
    <ControlsWrap>
      <ProgressBar
        min="0"
        max={durationInSec}
        step="1"
        value={currentTimeInSec}
        onChange={handleVideoRewind}
        percent={timePercent}
      />
      <ButtonsWrap>
        <ControlsGroup>
          <Button onClick={handlePlayPause} background={paused ? play : pause} />
          <Button onClick={handleStop} background={stop} />
          <TimeDisplay currentTime={currentTime} duration={duration} />
        </ControlsGroup>
        <ControlsGroup>
          <VolumeBlock volume={volume} handleVolume={handleVolume} volumePercent={volumePercent} handleMuteState={handleMuteState} muted={muted} maxVolume={maxVolume} />
          <Button onClick={handleFullscreen} background={fullscreen} />
        </ControlsGroup>
      </ButtonsWrap>
    </ControlsWrap>
  )
}