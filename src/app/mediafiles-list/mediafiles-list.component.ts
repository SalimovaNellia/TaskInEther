import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { MedifilesService } from '../services/medifiles.service';
import { Mediafile } from '../models/Mediafile';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mediafiles-list',
  templateUrl: './mediafiles-list.component.html',
  styleUrls: ['./mediafiles-list.component.scss']
})
export class MediafilesListComponent implements OnInit {
  @Output() mediafileSelected = new EventEmitter<Mediafile>();

  selectedMediafile: Mediafile;
  mediafiles: Array<Mediafile>;
  displayedColumns: string[] = ['type', 'title', 'duration'];
  dataSource = new MatTableDataSource<Mediafile>(this.mediafiles);

  constructor(public mediafilesService: MedifilesService) { }

 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.mediafilesService.getMediafiles()
      .subscribe(mediafiles => this.mediafiles = mediafiles);

    this.dataSource.paginator = this.paginator;
  }


  onSelectMedifile(){

  }

  selectMediafile(mediafile: Mediafile) {
    console.log('click')
    this.selectedMediafile = mediafile;
  }

  onMediafileChoosed() {
    this.mediafileSelected.next(this.selectedMediafile);
  }
}

// json server, mediafiles.service - getfiles, html of media files-list component
