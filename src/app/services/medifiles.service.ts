import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mediafile } from '../models/Mediafile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedifilesService {

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getMediafiles() : Observable<Array<Mediafile>> {
    return this.httpClient.get<Array<Mediafile>>(this.REST_API_SERVER + '/mediafiles');
  }
}
