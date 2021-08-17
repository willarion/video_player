import React from 'react';
import { GlobalStyle } from './styles/global';
import { Video } from "./components/Video/Video";
import { Wrapper } from "./components/Wrapper/Wrapper";
import {Controls} from "./components/Controls/Controls";

export const App: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Video>
        <Controls />
      </Video>
    </Wrapper>
  );
}

