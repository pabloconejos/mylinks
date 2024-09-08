import { PageService } from '@/app/core/services/page.service';
import { UserService } from '@/app/core/services/user.service';
import { UserDataBase } from '@/app/interfaces';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  users: UserDataBase[] = []
  username: string = '';
  isSearching: boolean = false

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.getUser().subscribe( users => {
      this.users = users
    }, error => {
      console.log(error)
    })
  }

  searchPage() {

    this.userService.getUser(this.username).subscribe( users => {
      this.users = users
    })
  }

  createAccount() {
    this.router.navigate(['/admin'])
  }


}
