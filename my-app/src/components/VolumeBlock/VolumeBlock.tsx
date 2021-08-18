import React from "react";
import styled from "styled-components";
import {RangeGradientProp} from "../../models/RangeGradientProps";
import {Button} from "../Button/Button";
import mutedBtn from "../../images/mutedBtn.svg";
import volumeBtn from "../../images/volumeBtn.svg";
import {ControlsProps} from "../../models/ControlsProps";

const StyledVolumeBlock = styled.div`
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

  ${StyledVolumeBlock}:hover & {
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

export const VolumeBlock: React.FC<Partial<ControlsProps>> = ({volume, handleVolume, volumePercent, handleMuteState, muted, maxVolume}) => {
  return (
    <StyledVolumeBlock>
      <VolumeBar
        min="0"
        max={maxVolume}
        step="0.02"
        value={volume}
        onChange={handleVolume}
        percent={volumePercent}
      />
      <Button onClick={handleMuteState} background={ muted ? mutedBtn : volumeBtn } />
    </StyledVolumeBlock>
  )
}