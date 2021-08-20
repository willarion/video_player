import {Action} from "../actions";
import {ActionType} from "../action-types";
import {calculateMinSec} from "../../utils/calculateMinSec";

interface State {
  volume: number;
  time: number;
  duration: {
    caption: string;
    seconds: number
  }
}

const initialState = {
  volume: 1,
  time: 0,
  duration: {
    caption: '00:00',
    seconds: 0
  }
}


export const videoSettingsReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      }
    case ActionType.REWIND:
      return {
        ...state,
        time: action.payload
      }
    case ActionType.SET_DURATION:
      return {
        ...state,
        duration: {
          caption: calculateMinSec(action.payload),
          seconds: action.payload
        }
      }
    default:
      return state;
  }
}