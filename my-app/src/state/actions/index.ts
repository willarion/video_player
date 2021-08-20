import {ActionType} from "../action-types";

interface SetVolume {
  type: ActionType.SET_VOLUME;
  payload: number;
}

interface Rewind {
  type: ActionType.REWIND;
  payload: number
}

interface SetDuration {
  type: ActionType.SET_DURATION;
  payload: number
}

export type Action = SetVolume | Rewind | SetDuration;