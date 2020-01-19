import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {
  @Input() duration: number;
  @Input() max: number = this.duration;
  @Input() min: number = 0;
  @Output() onDurationChange = new EventEmitter<number>();

  private step = 120000;

  constructor() { }

  ngOnInit() {
    if (this.duration && this.max != 0 && !this.max) {
      this.max = this.duration;
    }
  }

  increaseDuration() {
    if (this.duration + this.step <= this.max) {
      this.duration += this.step;
      this.onDurationChange.next(this.step);
    }
  }

  reduceDuration() {
    if (this.duration - this.step >= this.min) {
      this.duration -= this.step;
      this.onDurationChange.next(-1 * this.step);
    }
  }
}
