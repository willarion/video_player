import React from 'react';
import { GlobalStyle } from './styles/global';
import { Video } from "./components/Video/Video";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators, State } from './state';


export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { setVolume, rewindVideo } = bindActionCreators(ActionCreators, dispatch);

  const state = useSelector((state: State) => state.settings)


  return (
    <Wrapper>
      <h1>{state.volume}</h1>
      <button onClick={() => setVolume(1)} >up</button>
      <button onClick={() => setVolume(0)} >mute</button>
      <GlobalStyle />
      <Video />
    </Wrapper>
  );
}

