import { Component, OnInit } from '@angular/core';
import {Mediafile} from '../models/Mediafile';

@Component({
  selector: 'app-ether-task-steps',
  templateUrl: './ether-task-steps.component.html',
  styleUrls: ['./ether-task-steps.component.scss']
})
export class EtherTaskStepsComponent implements OnInit {
  selectedMediafile: Mediafile;

  constructor() { }

  ngOnInit() {
  }

  setMediafile(mediafile: any) {
    this.selectedMediafile = mediafile;
  }
}
