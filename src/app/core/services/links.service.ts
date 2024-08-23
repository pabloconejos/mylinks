import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LinkImage, Link } from '../../interfaces/index'

@Injectable({
  providedIn: 'root'
})
export class LinksService {


  URI = environment.apiUrl

  constructor(private http: HttpClient) { }

  getLinksImages() {
    return this.http.get<LinkImage[]>(this.URI+'links/linksImages')
  }

  setLink(link: Link) {
    return this.http.post<any>(this.URI+'links/link', {link}, { withCredentials: true })
  }

  getLinks() {
    return this.http.get<Link[]>(this.URI+'links/links' ,{ withCredentials: true })
  }
}