import React from 'react';
import styled from "styled-components";

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
  box-shadow: 0px 0px 10px 1px rgb(3 6 8);
`
const StyledVideo = styled.video`
  width: 100%;
  display: block;
`

export const Video: React.FC = ({children}) => {
  return (
    <VideoWrapper>
      <StyledVideo src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4">
        <source src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </StyledVideo>
      {children}
    </VideoWrapper>
  )
}