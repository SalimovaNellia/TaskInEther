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
  startInEther: number = 0;
  endInEther: number = 0;
  durationInEther: number;
  playUntil: number;

  constructor() { }

  ngOnInit() {
    this.durationInEther = this.selectedMediafile.duration;
    this.playUntil = this.selectedMediafile.duration;
  }

  onMediaOffsetChanged(step: number) {
    console.log();
    this.durationInEther -= step;
    this.endInEther -= step;
  }
}
