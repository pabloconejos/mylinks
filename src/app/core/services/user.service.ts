import { Injectable } from '@angular/core';
import { User, userDataBase } from '../../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Page } from '../../interfaces/Page';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private URI = environment.apiUrl;

  user!: User;

  constructor(private http: HttpClient) { }


  getUser() {
    return this.http.get<userDataBase>(this.URI+'auth/user', { withCredentials: true });
  }

  // TODO
  setUser(user: userDataBase) {
   // this.user = new User(user.user_id, user.username, user.mail, user.creation_date, new Page(user.page_id, user.user_id, user.title, user.description, user.background_emoji, user.background_color, user.background_html_id, user.bg_mode))
  }
}
