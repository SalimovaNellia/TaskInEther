import { Component, OnInit } from '@angular/core';
import { MedifilesService } from '../services/medifiles.service';
import { Mediafile } from '../models/Mediafile';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mediafiles-list',
  templateUrl: './mediafiles-list.component.html',
  styleUrls: ['./mediafiles-list.component.scss']
})
export class MediafilesListComponent implements OnInit {

  mediafiles: Array<Mediafile>;
  displayedColumns: string[] = ['type', 'title', 'duration'];

  constructor(public mediafilesService: MedifilesService,
              private router: Router) { }

  ngOnInit() {
    this.mediafilesService.getMediafiles()
      .pipe(
        map((array: Mediafile[]) => {
          return array.map(m => {
            m.duration = Math.floor (m.duration / 10) * 10 || m.duration;
            return m;
          })
        }
      ))
      .subscribe(mediafiles => this.mediafiles = mediafiles);
  }

  selectMediafile(mediafile: Mediafile) {
    this.mediafilesService.setMediafile(mediafile);
  }

  onDbClick(mediafile: Mediafile) {
    this.selectMediafile(mediafile);
    this.router.navigate(['/ether-settings']);
  }
}
