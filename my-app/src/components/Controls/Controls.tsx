import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import stop from '../../images/stop.svg';
import volume from '../../images/volume.svg';
import muted from '../../images/muted.svg';
import fullscreen from '../../images/fullscreen.svg';
import {calculateCurrentPercent} from "../../utils/calculateCurrentPercent";

const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const progressBarHeight = '10px';

const ProgressBar = styled.input`
  appearance: none;
  height: ${progressBarHeight};
  overflow: hidden;
  width: 100%;
  //background: linear-gradient(to right, red 0%, red 0%, #878585 0%, #878585 100%);
  margin: 0;

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

const Btn = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border: none;
  background: transparent no-repeat;
  outline: none;
  background-size: 1.5rem 1.5rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;
  margin-right: 5px;
  background-position: center;
  &:last-child{
    margin-right: 0;
  }
  &:hover{
    opacity: .7;
  }
`

const PlayBtn = styled(Btn)`
  background-image: url(${play});
`

const PauseBtn = styled(Btn)`
  background-image: url(${pause});
`

const StopBtn = styled(Btn)`
  background-image: url(${stop});
`

const VolumeBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`

const VolumeBtn = styled(Btn)`
  background-image: url(${volume});
`

const MutedBtn = styled(Btn)`
  background-image: url(${muted});
`

const VolumeBar = styled.input`
  margin: 0 5px;
  display: none;
  appearance: none;
  height: 5px;
  overflow: hidden;
  width: 100%;
  
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
        type="range"
        min={0}
        max={durationInSec}
        step={1}
        value={currentTimeInSec}
        onChange={handleVideoRewind}
        style={{background: `linear-gradient(to right, red 0%, red ${timePercent}%, #878585 ${timePercent}%, #878585 100%)`}}
      />
      <ButtonsWrap>
        <ControlsGroup>
          { paused ? <PlayBtn onClick={handlePlayPause} /> : <PauseBtn onClick={handlePlayPause} /> }
          <StopBtn onClick={handleStop} />
          <TimeDisplay>{ currentTime ? currentTime : '00:00' } / { duration ? duration : '00:00' } </TimeDisplay>
        </ControlsGroup>
        <ControlsGroup>
          <VolumeBlock>
            <VolumeBar
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={volume}
              onChange={handleVolume}
              style={{background:` linear-gradient(to right, #d7d7d7 0%, #d7d7d7 ${volumePercent}%, #878585 ${volumePercent}%, #878585 100%)`}}
            />
            { muted ? <MutedBtn onClick={handleMuteState} /> : <VolumeBtn onClick={handleMuteState} /> }
          </VolumeBlock>
          <FullscreenBtn onClick={handleFullscreen} />
        </ControlsGroup>
      </ButtonsWrap>
    </ControlsWrap>
  )
}