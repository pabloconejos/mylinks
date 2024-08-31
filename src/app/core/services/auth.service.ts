import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { checkAuth, LoginDTO, RegisterDTO } from '../../interfaces/index'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService) 
  { }


  login (login: LoginDTO) {
    return this.http.post<RegisterDTO>(this.URI+'auth/login', login, { withCredentials: true });
  }


  register (register : RegisterDTO) {
    return this.http.post<RegisterDTO>(this.URI+'auth/register', register);
  }

  isAuthenticated () {
    return this.http.get<checkAuth>(this.URI+'auth/check-auth', { withCredentials: true });
  }

  logOut() {
    return this.http.get<{ message: string }>(this.URI+'auth/logout', { withCredentials: true })
  }

}
