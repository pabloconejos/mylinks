import { UserService } from '@/app/core/services/user.service';
import { Page } from '@/app/interfaces/Page';
import { User, userDataBase } from '@/app/interfaces/User';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../../core/services/page.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {


  user!: User;
  page!: Page;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private pageService: PageService
  ) 
  {
    const { username } = this.activatedRoute.snapshot.params
    this.userService.getUser(username, true).subscribe( user => {
      this.inicializarVariables(user[0])
    })
  }


  inicializarVariables(user: userDataBase) {
    this.user = this.userService.setUser(user)
    this.page = this.pageService.setPage(this.user)
  }

}
