import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getUser().subscribe( user => {
      console.log(user)
    })
  }

}
