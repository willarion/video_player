import React from 'react';
import styled from 'styled-components';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import stop from '../../images/stop.svg';
import fullscreen from '../../images/fullscreen.svg';
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ButtonsWrap } from "../ButtonsWrap/ButtonsWrap";
import { ControlsGroup } from "../ControlsGroup/ControlsGroup";
import { TimeDisplay } from "../TimeDisplay/TimeDisplay";
import { Button } from "../Button/Button";
import { VolumeBlock } from "../VolumeBlock/VolumeBlock"
import { ControlsProps } from "../../models/ControlsProps";
import { useBarColor } from "../../hooks/useBarColor";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators, State } from "../../state";
import { bindActionCreators } from "redux";

const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Controls: React.FC<ControlsProps> = ({ handlePlayPause, handleStop, paused, handleFullscreen, handleMuteState, muted, handleVolume, handleVideoRewind }) => {

  const dispatch = useDispatch();
  const { rewindVideo } = bindActionCreators(ActionCreators, dispatch);
  const state = useSelector((state: State) => state.settings);

  const timePercent = useBarColor(state.time, state.duration.seconds);

  return (
    <ControlsWrap>
      <ProgressBar
        min="0"
        max={state.duration.seconds}
        step="1"
        value={state.time}
        onChange={(event) => {
          rewindVideo(event.target.valueAsNumber);
          handleVideoRewind(event.target.valueAsNumber);
        }}
        percent={timePercent}
      />
      <ButtonsWrap>
        <ControlsGroup>
          <Button onClick={handlePlayPause} background={paused ? play : pause} />
          <Button onClick={handleStop} background={stop} />
          <TimeDisplay />
        </ControlsGroup>
        <ControlsGroup>
          <VolumeBlock handleVolume={handleVolume} handleMuteState={handleMuteState} muted={muted} />
          <Button onClick={handleFullscreen} background={fullscreen} />
        </ControlsGroup>
      </ButtonsWrap>
    </ControlsWrap>
  )
}