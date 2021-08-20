import {Action} from "../actions";
import {ActionType} from "../action-types";

interface State {
  volume: number;
  time: {
    caption: string;
    seconds: number;
  }
}

const initialState = {
  volume: 1,
  time: {
    caption: '00:00',
    seconds: 0,
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
        time: {
          caption: action.payload.caption,
          seconds: action.payload.seconds,
        }
      }
    default:
      return state;
  }
}