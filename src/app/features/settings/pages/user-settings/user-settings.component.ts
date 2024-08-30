import { User } from '@/app/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent implements OnInit{
  
  userForm!: FormGroup
  passwordForm!: FormGroup

  user!: User;

  userFormSubmitted: boolean = false
  passwordFormSubmitted: boolean = false

  errorUser: boolean = false

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) 
  {

  }

  ngOnInit(): void {

    this.initForm()
    
  }

  initForm() {

    this.user = this.userService.user

    this.userForm = this.fb.group({
      mail: [this.user.mail || '', [Validators.required, Validators.email]],                 
      username: [this.user.username || '', [Validators.required]]
    });

    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(5)]],                      
      newPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  

  get lfUser() {
    return this.userForm.controls;
  }

  get lfPassword() {
    return this.passwordForm.controls;
  }

  saveUser() {
    this.userFormSubmitted = true
    if (this.userForm.valid) {
      const { value } = this.userForm
      this.userService.updateUser(value).subscribe( response => {
        this.userService.user.mail = value.mail
        this.userService.user.username = value.username
      }, error => {
        // TODO: AVISAR DE QUE ALGO HA FALLADO
        this.errorUser = true
      })
    }
  }

  savePasword() {
    this.passwordFormSubmitted = true
    if (this.passwordForm.valid) {
      const { value } = this.passwordForm
      console.log(value)
    }
  }

}
