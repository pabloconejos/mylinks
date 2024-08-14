import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private URI = environment.apiUrl+'page/';

  constructor(
    private http: HttpClient,
    private router: Router) 
  { }

  havePage () {
    return this.http.get<any>(this.URI+'search', { withCredentials: true });
  }

  createPage() {
    return this.http.post<{pageId : string}>(this.URI + 'create', {}, { withCredentials: true });
  }

  updatePage(data: any) {
    return this.http.post<{pageId : string}>(this.URI + 'update', {data}, { withCredentials: true });
  }
  
}
