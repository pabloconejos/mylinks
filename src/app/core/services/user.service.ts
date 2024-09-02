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



  getUserLogged() {
    return this.http.get<userDataBase>(this.URI+'auth/user', { withCredentials: true });
  }

  getUser(user: string, exact: boolean) {
    return this.http.get<userDataBase[]>(`${this.URI}user/${user}`, {
      params: {
        exact: exact.toString()
      }
    });
  }
  

  setUser(user: userDataBase): User {
    try {
      const {background_color, background_emoji, background_html_id, bg_mode, creation_date, description, likes, mail, page_id, title, user_id, username, css_real_bg, mainColor, secondaryColor} = user
      const creationDate: Date = new Date(creation_date);
      return new User(
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
    } catch (e) {
      throw new Error(`Failed to set user`);
    }
  }

  updateUser(userData: {username: string, mail: string}) {
    return this.http.patch<userDataBase>(this.URI+'user/update', {userData} , { withCredentials: true })
  }

  changePassword(password: {newPassword: string, oldPassword: string}) {
    return this.http.patch<string>(this.URI+'user/changePassword', {password}, {withCredentials: true})
  }
}