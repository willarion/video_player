import { Action } from "../actions";
import { ActionType } from "../action-types";
import { calculateMinSec } from "../../utils/calculateMinSec";
import { initialState, State } from "../initial-state/initialState";

export const videoSettingsReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_SRC:
      return {
        ...state,
        src: action.payload
      }
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