import { PageService } from '@/app/core/services/page.service';
import { UserService } from '@/app/core/services/user.service';
import { UserDataBase } from '@/app/interfaces';
import { Component } from '@angular/core';

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
    private pageService: PageService,
    private userService: UserService
  ) {
    this.userService.getUser().subscribe( users => {
      console.log(users)
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


}
