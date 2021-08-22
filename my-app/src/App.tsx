import React from 'react';
import { GlobalStyle } from './styles/global';
import { Video } from "./components/Video/Video";
import { Wrapper } from "./components/Wrapper/Wrapper";
import {useVideoUrl} from "./hooks/useVideoUrl";

export const App: React.FC = () => {
  const url = useVideoUrl();

  return (
    <Wrapper>
      <GlobalStyle />
      { url && <Video url={url}/> }
    </Wrapper>
  );
}

