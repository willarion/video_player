export interface State {
  src: string;
  volume: number;
  time: number;
  duration: {
    caption: string;
    seconds: number
  }
}

export const initialState = {
  src: '',
  volume: 1,
  time: 0,
  duration: {
    caption: '00:00',
    seconds: 0
  }
}