import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private URI = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router) 
  { }

  havePage () {
    return this.http.get<any>(this.URI+'page/search', { withCredentials: true });
  }
}
