import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {State} from "../../state";
import {calculateMinSec} from "../../utils/calculateMinSec";

const StyledTimeDisplay = styled.span`
  color: white;
  font-size: 1rem;
  display: block;
  opacity: 0.6;
`

export const TimeDisplay: React.FC = () => {

  const state = useSelector((state: State) => state.settings);


  return (
    <StyledTimeDisplay>{ calculateMinSec(state.time) } / { state.duration.caption } </StyledTimeDisplay>
  )
}