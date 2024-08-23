import { Injectable } from '@angular/core';
import { User, userDataBase } from '../../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Page } from '../../interfaces/index';

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

  setUser(user: userDataBase) {
    // console.log(user)
    try {
      const {background_color, background_emoji, background_html_id, bg_mode, creation_date, description, likes, mail, page_id, title, user_id, username, css_real_bg, mainColor, secondaryColor} = user
      const creationDate: Date = new Date(creation_date);
      // console.log(bg_mode)
      this.user = new User(
        user_id,
        username,
        mail,
        creationDate,
        new Page(
          page_id,
          user_id,
          title,
          description,
          background_emoji,
          background_color, 
          background_html_id,
          bg_mode,
          likes,
          css_real_bg,
          mainColor,
          secondaryColor
        )
      )
      return true
    } catch (e) {
      return e
    }
    

  }
}