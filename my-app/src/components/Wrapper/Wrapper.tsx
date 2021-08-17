import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const Wrapper: React.FC = ({children}) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}