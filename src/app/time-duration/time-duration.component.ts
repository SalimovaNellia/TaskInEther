import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-time-duration',
  templateUrl: './time-duration.component.html',
  styleUrls: ['./time-duration.component.scss']
})
export class TimeDurationComponent implements OnInit {
  @Input() duration: number;
  @Output() onDurationChange = new EventEmitter<number>();

  private step = 1_000;

  constructor() { }

  ngOnInit() {
  }

  increaseDuration() {
    this.duration += this.step;
    this.onDurationChange.next(this.duration);
  }

  reduceDuration() {
    if (this.duration - this.step >= 0) {
      this.duration -= this.step;
      this.onDurationChange.next(this.duration);
    }
  }
}
