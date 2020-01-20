import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  @Input() time: number;
  @Output() onTimeChange = new EventEmitter<number>();

  private step = 1_000;

  private dayInMillis = 24 * 60 * 60 * 1000;

  constructor() { }

  ngOnInit() {
  }

  increaseDuration() {
    this.time += this.step;

    if (this.time >= this.dayInMillis){
      this.time %= this.dayInMillis;
    }

    this.onTimeChange.next(this.step);
  }

  reduceDuration() {
    if (this.time < this.step){
      this.time = this.time + this.dayInMillis - this.step;
    } else {
      this.time -= this.step;
    }

    this.onTimeChange.next(-1 * this.step);
  }
}
