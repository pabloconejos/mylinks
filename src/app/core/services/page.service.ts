import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Page, UpdatePage, User } from '../../interfaces/index';


@Injectable({
  providedIn: 'root'
})
export class PageService {

  private URI = environment.apiUrl+'page/';

  page!: Page;

  constructor(
    private http: HttpClient,
    private router: Router) 
  { }


  setPage(user: User) {
    console.log(user)
    this.page = new Page(
      user.page.id,
      user.page.user_id,
      user.page.title,
      user.page.description,
      user.page.background_emoji,
      user.page.background_color,
      user.page.background_html_id,
      user.page.bg_mode,
      user.page.likes,
      user.page.css_real_bg,
      user.page.mainColor,
      user.page.secondaryColor
    )

  }

  havePage () {
    return this.http.get<any>(this.URI+'search', { withCredentials: true });
  }

  createPage() {
    return this.http.post<{pageId : string}>(this.URI + 'create', {}, { withCredentials: true });
  }

  updatePage(data: UpdatePage) {
    return this.http.patch<{pageId : string}>(this.URI + 'update', {data}, { withCredentials: true });
  }
  
}
