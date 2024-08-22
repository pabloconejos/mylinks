import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RootBackgrounds } from '../../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private URI = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router) 
  { }


  getBackgrounds () {
    return this.http.get<RootBackgrounds>(this.URI+'background-html/bg', { withCredentials: true });
  }
}
