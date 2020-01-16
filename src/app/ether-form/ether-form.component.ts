import { Component, Input, OnInit } from '@angular/core';
import { MedifilesService } from '../services/medifiles.service';
import { Mediafile } from '../models/Mediafile';


@Component({
  selector: 'app-ether-form',
  templateUrl: './ether-form.component.html',
  styleUrls: ['./ether-form.component.scss']
})
export class EtherFormComponent implements OnInit {

  mediaOffset: number = 0;
  playUntil: number = 0;
  startTime: number = 0;
  durationInEther: number = 0;
  endInEther: number = 0;
  currentPlayTime: number = 0;


  @Input()  selectedMediafile: Mediafile;

  constructor() { }

  ngOnInit() {

  }
}
