import {Dispatch} from "redux";
import {Action} from "../actions";
import {ActionType} from "../action-types";

export const setVolume = (volume: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_VOLUME,
      payload: volume
    })
  }
}

export const rewindVideo = (seconds: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REWIND,
      payload: seconds
    })
  }
}

export const measureDuration = (duration: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_DURATION,
      payload: duration
    })
  }
}