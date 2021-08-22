import styled from "styled-components";
import { RangeGradientProp } from "../../models/RangeGradientProps";

const progressBarHeight = '10px';

export const ProgressBar = styled.input.attrs({
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