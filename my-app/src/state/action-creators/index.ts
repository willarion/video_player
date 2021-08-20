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

export const rewindVideo = (caption: string, seconds: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REWIND,
      payload: {
        caption: caption,
        seconds: seconds,
      }
    })
  }
}