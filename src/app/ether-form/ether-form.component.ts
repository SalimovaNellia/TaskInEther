import { Component, Input, OnInit } from '@angular/core';
import { Mediafile } from '../models/Mediafile';
import { createDate } from '../date/date-utils';
import { MedifilesService } from '../services/medifiles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ether-form',
  templateUrl: './ether-form.component.html',
  styleUrls: ['./ether-form.component.scss']
})
export class EtherFormComponent implements OnInit {

  selectedMediafile: Mediafile;
  mediaOffset: number = 0;
  durationInEther: number;
  playUntil: number;

  endInEther: Date;
  startInEther: Date;

  constructor(public mediafilesService: MedifilesService,
              private router: Router) { }

  ngOnInit() {
    if (!this.mediafilesService.getSelectedMediafile()){
      this.router.navigate(['/mediafiles'])
    }

    this.selectedMediafile = this.mediafilesService.getSelectedMediafile();
    this.durationInEther = this.selectedMediafile.duration;
    console.log(this.selectedMediafile);
    this.startInEther = this.getEtherStartTime();
    this.playUntil = this.selectedMediafile.duration;
    this.endInEther = createDate(this.startInEther.getTime());

  }

  onMediaOffsetChanged(step: number) {
    this.durationInEther -= step;
    this.endInEther = createDate(this.endInEther.getTime() - step);
  }

  private getEtherStartTime(): Date {
    let now  = createDate();
    now.setHours( now.getHours());
    now.setDate(now.getDate());
    return now;
  }

  onStartInEtherChanged(step: number) {
    this.endInEther = createDate(this.endInEther.getTime() + step);
  }

  onStartInEtherDateChanged(startDate: Date) {
    this.endInEther = new Date(startDate.getTime() + this.durationInEther);
  }

  onPlayUntilChanged(step: number) {
    if (this.durationInEther + step <= this.selectedMediafile.duration) {
      this.durationInEther += step;
      this.endInEther = createDate(this.endInEther.getTime() + step);
    }
  }

  sendSettings() {
    let settings = {
      mediafileId: this.selectedMediafile.id,
      startInEther: this.startInEther,
      endInEther: this.endInEther,
      mediaOffset: this.mediaOffset
    };
    this.mediafilesService.postSettings(settings);

    this.router.navigate(['./success']);
  }
}

