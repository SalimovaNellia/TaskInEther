import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(duration: number): string {
    if (!duration) {
      return '-';
    }

    let milliseconds = duration % 1000;
    duration = (duration - milliseconds) / 1000;

    let seconds = duration % 60;
    duration = (duration - seconds) / 60;

    let minutes = duration % 60;
    let hours = (duration - minutes) / 60;

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
