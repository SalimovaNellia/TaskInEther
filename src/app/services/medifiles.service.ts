import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mediafile } from '../models/Mediafile';
import { Observable } from 'rxjs';
import { EtherTask } from '../models/EtherTask';

@Injectable({
  providedIn: 'root'
})
export class MedifilesService {

  private selectedMediafile: Mediafile;

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }



  public setMediafile(mediafile: Mediafile) {
    this.selectedMediafile = mediafile;
  }

  public getSelectedMediafile() {
    return this.selectedMediafile;
  }

  public getMediafiles() : Observable<Array<Mediafile>> {
    return this.httpClient.get<Array<Mediafile>>(this.REST_API_SERVER + '/mediafiles');
  }

  public postSettings(settings: EtherTask) {
    console.log("post")
    return this.httpClient.post<Array<Mediafile>>(this.REST_API_SERVER + '/mediafiles', settings);

  }
}
