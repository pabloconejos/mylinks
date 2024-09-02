import { PageService } from '@/app/core/services/page.service';
import { UserService } from '@/app/core/services/user.service';
import { User } from '@/app/interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-layaout',
  templateUrl: './settings-layaout.component.html',
  styleUrl: './settings-layaout.component.scss'
})
export class SettingsLayaoutComponent implements OnInit{


  constructor(
    public userService: UserService,
    private pageService: PageService
  )
  {
    this.getUser()
  } 

  ngOnInit(): void {
    
  }

  getUser() {
    this.userService.getUserLogged().subscribe( user => {
      this.userService.user = this.userService.setUser(user)
      this.pageService.page = this.pageService.setPage(this.userService.user)
    })
  }
}
