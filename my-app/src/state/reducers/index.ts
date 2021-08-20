import { combineReducers } from "redux";
import {videoSettingsReducer} from "./videoSettingsReducer";

const reducers = combineReducers({
  settings: videoSettingsReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;