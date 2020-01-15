import {Component, Input, OnInit} from '@angular/core';
import { MedifilesService } from '../services/medifiles.service';
import {Mediafile} from '../models/Mediafile';


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
}
