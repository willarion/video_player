export const calculateMinSec = (time: number): string => {
  console.log(time)
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  return minuteValue + ':' + secondValue;
}