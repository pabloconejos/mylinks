import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterDTO } from '../../../../interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  registerFormSubmitted = false;
  registerError: boolean = false;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });    
  }

  get lf() {
    return this.registerForm.controls;
  }

  register() {
    this.registerFormSubmitted = true

    if
    (
      this.lf['mail'].errors || this.lf['password'].errors || 
      this.lf['username'].errors
    ) 
    {
      this.registerError = true
      return 
    }

    const { value } = this.registerForm

    const user: RegisterDTO = {
      mail: value.mail,
      username: value.username,
      password: value.password
    }

    this.loading = true
    this.authService.register( user ).subscribe( r => {
      this.loading = false
      this.router.navigate(['/auth/login']);
    }, error => {
      console.log(error)
      this.loading = false
      this.registerError = true
    })

  }
}
