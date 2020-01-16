import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {
  @Input() duration: number;
  @Output() onDurationChange = new EventEmitter<number>();

  private step = 1_000;

  constructor() { }

  ngOnInit() {
  }

  increaseDuration() {
    this.duration += this.step;
    this.onDurationChange.next(this.step);
  }

  reduceDuration() {
    if (this.duration - this.step >= 0) {
      this.duration -= this.step;
      this.onDurationChange.next(-1 * this.step);
    }
  }
}
