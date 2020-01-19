import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(timeInMs: any): string {
    if (timeInMs != 0 && !timeInMs) {
      return '-';
    }

    let date = new Date(timeInMs);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
console.log(milliseconds)
    let millisecondsString = milliseconds.toString();
    if (milliseconds > 99){
      millisecondsString = milliseconds.toString().substring(0, 2);
    } else if (milliseconds < 10) {
      millisecondsString = '0' + milliseconds;
    } else {
      millisecondsString = "0" + milliseconds.toString();
      millisecondsString = millisecondsString.substring(2);
    }

    return (hours > 9 ? hours : '0' + hours) + ':' +
           (minutes > 9 ? minutes : '0' + minutes) + ':' +
           (seconds > 9 ? seconds : '0' + seconds);
  }

}
