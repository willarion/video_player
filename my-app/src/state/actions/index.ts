import {ActionType} from "../action-types";

interface SetVolume {
  type: ActionType.SET_VOLUME;
  payload: number;
}

interface Rewind {
  type: ActionType.REWIND;
  payload: {
    caption: string;
    seconds: number;
  }
}

export type Action = SetVolume | Rewind;