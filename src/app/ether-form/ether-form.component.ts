import { Component, Input, OnInit } from '@angular/core';
import { Mediafile } from '../models/Mediafile';


@Component({
  selector: 'app-ether-form',
  templateUrl: './ether-form.component.html',
  styleUrls: ['./ether-form.component.scss']
})
export class EtherFormComponent implements OnInit {

  @Input()  selectedMediafile: Mediafile;

  mediaOffset: number = 0;
  durationInEther: number;
  playUntil: number;

  endInEther: Date;
  startInEther: Date;

  constructor() { }

  ngOnInit() {
    this.durationInEther = this.selectedMediafile.duration;
    this.startInEther = this.getEtherStartTime();
    this.playUntil = this.selectedMediafile.duration;
    this.endInEther = new Date(+this.selectedMediafile.duration + this.startInEther.getTime());
  }

  onMediaOffsetChanged(step: number) {
    this.durationInEther -= step;
    this.endInEther = new Date(this.endInEther.getTime() - step);
  }

  private getEtherStartTime(): Date {
    let now  = new Date();
    now.setHours( now.getHours() + 2 );
    now.setDate(now.getDate());
    return now;
  }


  onStartInEtherChanged(step: number) {
    this.endInEther = new Date(this.endInEther.getTime() - step);
  }
}

