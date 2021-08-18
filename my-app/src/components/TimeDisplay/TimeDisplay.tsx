import React from "react";
import styled from "styled-components";
import {TimeDisplayProps} from "../../models/TimeDisplayProps";

const StyledTimeDisplay = styled.span`
  color: white;
  font-size: 1rem;
  display: block;
  opacity: 0.6;
`

export const TimeDisplay: React.FC<TimeDisplayProps> = ({currentTime, duration}) => {
  return (
    <StyledTimeDisplay>{ currentTime ? currentTime : '00:00' } / { duration ? duration : '00:00' } </StyledTimeDisplay>
  )
}