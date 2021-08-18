import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import stop from '../../images/stop.svg';
import volumeBtn from '../../images/volumeBtn.svg';
import mutedBtn from '../../images/mutedBtn.svg';
import fullscreen from '../../images/fullscreen.svg';
import {calculateCurrentPercent} from "../../utils/calculateCurrentPercent";

interface BtnBackgroundImageProp {
  background: string;
}

interface RangeGradientProp {
  percent: number;
}

const progressBarHeight = '10px';

const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const ProgressBar = styled.input.attrs({
  type: "range"
})<RangeGradientProp>`
  appearance: none;
  height: ${progressBarHeight};
  overflow: hidden;
  width: 100%;
  margin: 0;
  background: linear-gradient(to right, red 0%, red ${props => props.percent}%, #878585 ${props => props.percent}%, #878585 100%);

  &::-webkit-slider-thumb {
    height: ${progressBarHeight};
    width: ${progressBarHeight};
    appearance: none;
    background: white;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    height: ${progressBarHeight};
    width: ${progressBarHeight};
    background: white;
    border-radius: 50%;
    position: relative;
  }
`

const ButtonsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #273136;
  height: 30px;
  padding: 0 5px;
  box-sizing: border-box;
`

const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Btn = styled.button<BtnBackgroundImageProp>`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border: none;
  outline: none;
  background-size: 1.5rem 1.5rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;
  margin-right: 5px;
  background:  ${props => `url(${props.background}) transparent no-repeat center`};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: .7;
  }
`

const VolumeBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`

const VolumeBar = styled.input.attrs({
  type: "range"
})<RangeGradientProp>`
  margin: 0 5px;
  display: none;
  appearance: none;
  height: 5px;
  overflow: hidden;
  width: 80%;
  background: linear-gradient(to right, #dd5e5e 0%, #dd5e5e ${props => props.percent}%, #878585 ${props => props.percent}%, #878585 100%);

  ${VolumeBlock}:hover & {
    display: block;
  }

  &::-webkit-slider-thumb {
    height: 5px;
    width: 5px;
    appearance: none;
    background: white;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    height: 5px;
    width: 5px;
    background: white;
    border-radius: 50%;
    position: relative;
  }
`

const FullscreenBtn = styled(Btn)`
  background-image: url(${fullscreen});
`

const TimeDisplay = styled.span`
  color: white;
  font-size: 1rem;
  display: block;
  opacity: 0.6;
`

interface ControlsProps {
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
}

export const Controls: React.FC<ControlsProps> = ({ handlePlayPause, handleStop, paused, currentTime, currentTimeInSec, duration, durationInSec, handleFullscreen, handleMuteState, muted, handleVolume, volume, handleVideoRewind }) => {

  const [timePercent, setTimePercent] = useState(0);
  const [volumePercent, setVolumePercent] = useState(0);

  useEffect(() => {
    setTimePercent(calculateCurrentPercent(currentTimeInSec, durationInSec))
  }, [currentTimeInSec, durationInSec]);

  useEffect(() => {
    setVolumePercent(calculateCurrentPercent(volume, 1))
  }, [volume]);

  return (
    <ControlsWrap>
      <ProgressBar
        min={0}
        max={durationInSec}
        step={1}
        value={currentTimeInSec}
        onChange={handleVideoRewind}
        percent={timePercent}
      />
      <ButtonsWrap>
        <ControlsGroup>
          <Btn onClick={handlePlayPause} background={paused ? play : pause} />
          <Btn onClick={handleStop} background={stop} />
          <TimeDisplay>{ currentTime ? currentTime : '00:00' } / { duration ? duration : '00:00' } </TimeDisplay>
        </ControlsGroup>
        <ControlsGroup>
          <VolumeBlock>
            <VolumeBar
              min={0}
              max={1}
              step={0.02}
              value={volume}
              onChange={handleVolume}
              percent={volumePercent}
              style={{background:` linear-gradient(to right, #dd5e5e 0%, #dd5e5e ${volumePercent}%, #878585 ${volumePercent}%, #878585 100%)`}}
            />
            <Btn onClick={handleMuteState} background={ muted ? mutedBtn : volumeBtn } />
          </VolumeBlock>
          <Btn onClick={handleFullscreen} background={fullscreen} />
        </ControlsGroup>
      </ButtonsWrap>
    </ControlsWrap>
  )
}