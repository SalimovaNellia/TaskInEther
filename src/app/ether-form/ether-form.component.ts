import {Component, Input, OnInit} from '@angular/core';
import { MedifilesService } from '../services/medifiles.service';
import { Mediafile } from '../models/Mediafile';
import { msToTime } from '../utils/msToTime';

@Component({
  selector: 'app-ether-form',
  templateUrl: './ether-form.component.html',
  styleUrls: ['./ether-form.component.scss']
})
export class EtherFormComponent implements OnInit {

  @Input()  selectedMediafile: Mediafile;

  constructor() { }

  ngOnInit() {

  }

  msToTime(duration: number) {
    if (duration) {
      return msToTime(duration)
    } else {
      return '-'
    }
  }
}
