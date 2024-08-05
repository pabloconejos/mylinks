import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { LoginDTO } from '../../../../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss']
})
export class LoginComponent {


  loginForm: FormGroup;
  loginFormSubmitted = false;
  loginError: boolean = false;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });    
  }

  get lf() {
    return this.loginForm.controls;
  }

  login () {
    this.loginFormSubmitted = true

    if
    (
      this.lf['mail'].errors || this.lf['password'].errors
    ) 
    {
      this.loginError = true
      return 
    }

    const { value } = this.loginForm

    const user: LoginDTO = {
      mail: value.mail,
      password: value.password
    }

    this.loading = true;
    this.authService.login(user).subscribe( r => {
      this.loading = false
      this.router.navigate(['/admin']);
    }, error => {
      console.log(error)
      this.loading = false
      this.loginError = true
    })
  }

}
