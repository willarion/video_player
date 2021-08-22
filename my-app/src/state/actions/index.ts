import { ActionType } from "../action-types";

interface SetSrc {
  type: ActionType.SET_SRC;
  payload: string;
}

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

export type Action = SetSrc | SetVolume | Rewind | SetDuration;