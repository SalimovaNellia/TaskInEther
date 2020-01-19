import { Component, Input, OnInit } from '@angular/core';
import { Mediafile } from '../models/Mediafile';
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
              private router: Router) {
    if (!this.mediafilesService.getSelectedMediafile()){
      this.router.navigate(['/mediafiles'])
    }
  }

  ngOnInit() {
    this.selectedMediafile = this.mediafilesService.getSelectedMediafile();
    this.durationInEther = this.selectedMediafile.duration;
    this.startInEther = new Date();
    this.playUntil = this.selectedMediafile.duration;
    this.endInEther = new Date(this.startInEther.getTime() + this.selectedMediafile.duration);
  }

  onMediaOffsetChanged(step: number) {
    this.durationInEther -= step;
    this.mediaOffset += step;
    this.endInEther = new Date(this.endInEther.getTime() - step);
  }

  onStartInEtherChanged(step: number) {
    this.endInEther = new Date(this.endInEther.getTime() + step);
  }

  onStartInEtherDateChanged(startDate: Date) {
    this.endInEther = new Date(startDate.getTime() + this.durationInEther);
  }

  onPlayUntilChanged(step: number) {
    this.durationInEther += step;
    this.playUntil += step;
    this.endInEther = new Date(this.endInEther.getTime() + step);
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

  get mediaOffsetMaxValue(): number {
    return  this.selectedMediafile.duration > this.playUntil ? this.playUntil : this.selectedMediafile.duration
  }

  get playUntilMinValue(): number {
    return this.mediaOffset > 0 ? this.mediaOffset : 0;
  }
}

