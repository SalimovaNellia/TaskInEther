import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  dayInMillis = 24 * 60 * 60 * 1000;

  transform(timeInMs: any): string {
    if (timeInMs != 0 && !timeInMs) {
      return '-';
    }
    if (timeInMs > this.dayInMillis) {
      timeInMs %= this.dayInMillis;
    }

    let milliseconds = timeInMs % 1000;
    timeInMs = (timeInMs - milliseconds) / 1000;

    let seconds = timeInMs % 60;
    timeInMs = (timeInMs - seconds) / 60;

    let minutes = timeInMs % 60;
    let hours = (timeInMs - minutes) / 60;
    hours %= 24;

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

}
