import { User } from '@/app/interfaces';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) 
  {
    this.user = this.userService.user
  }

  ngOnInit(): void {

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
    const { value } = this.userForm
    console.log(value)
  }

  savePasword() {
    this.passwordFormSubmitted = true
    const { value } = this.passwordForm
    console.log(value)
  }

}
