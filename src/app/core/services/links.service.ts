import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LinkImage } from '../../interfaces/LinksImages';
import { LinkForm } from '../../interfaces/Link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {


  URI = environment.apiUrl

  constructor(private http: HttpClient) { }

  getLinksImages() {
    return this.http.get<LinkImage[]>(this.URI+'links/linksImages')
  }

  setLink(data: LinkForm) {
    return this.http.post<any>(this.URI+'links/link', {data}, { withCredentials: true })
  }
}