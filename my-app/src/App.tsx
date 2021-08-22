import React from 'react';
import { GlobalStyle } from './styles/global';
import { Video } from "./components/Video/Video";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useVideoUrl } from "./hooks/useVideoUrl";
import { useSelector } from "react-redux";
import { State } from "./state";

export const App: React.FC = () => {
  useVideoUrl();

  const state = useSelector((state: State) => state.settings);

  return (
    <Wrapper>
      <GlobalStyle />
      { state.src && <Video /> }
    </Wrapper>
  );
}

