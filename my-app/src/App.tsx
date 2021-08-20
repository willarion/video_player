import React from 'react';
import { GlobalStyle } from './styles/global';
import { Video } from "./components/Video/Video";
import { Wrapper } from "./components/Wrapper/Wrapper";

export const App: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Video />
    </Wrapper>
  );
}

