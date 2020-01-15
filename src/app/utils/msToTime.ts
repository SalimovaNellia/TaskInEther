export function msToTime(s) {
  let milliseconds = s % 1000;
  s = (s - milliseconds) / 1000;

  let seconds: number = s % 60;
  s = (s - seconds) / 60;

  let minutes: number = s % 60;
  let hours: number = (s - minutes) / 60;

  let millisecondsString = milliseconds.toString();
  if (milliseconds > 99){
    millisecondsString = milliseconds.toString().substring(0, 2);
  } else if (milliseconds < 10) {
    millisecondsString = '0' + milliseconds;
  }

  return (hours > 9 ? hours : '0' + hours) + ':' +
         (minutes > 9 ? minutes : '0' + minutes) + ':' +
         (seconds > 9 ? seconds : '0' + seconds) + ':' +
         millisecondsString;
}
