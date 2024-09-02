import { UserService } from '@/app/core/services/user.service';
import { Page } from '@/app/interfaces/Page';
import { User, userDataBase } from '@/app/interfaces/User';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../../core/services/page.service';
import { LinksService } from '@/app/core/services/links.service';
import { Link } from '@/app/interfaces';
import { Notification } from '@/app/interfaces';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user!: User;
  page!: Page;
  links: Link[] = []
  isDisabled: boolean = false;
  activeColor: string = '#FF69B4';  
  inactiveColor: string = '#d8d8d8';

  isNotificationVisible: boolean = false
  notification!: Notification;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private pageService: PageService,
    private linksService: LinksService
  ) 
  {
    // TODO HACER ALGO CUANDO NO SE ENCUENTRE EL USER
    const { username } = this.activatedRoute.snapshot.params
    this.userService.getUser(username, true).subscribe( user => {
      this.inicializarVariables(user[0])
    })
  }


  inicializarVariables(user: userDataBase) {
    this.user = this.userService.setUser(user)
    this.page = this.pageService.setPage(this.user)
    this.getLinks()
  }

  getLinks() {
    this.linksService.getLinks(this.user.id).subscribe( (links: Link[]) => {
      this.links = links
    })
  }

  like() {
    this.isDisabled = true
    const likes = (this.page.likes + 1)
    this.pageService.like(this.page.id, likes).subscribe(r => {
      this.page.likes += 1
      this.isDisabled = false
    }, error => {
      // TODO : ARREGLAR MENSAJE EN LA NOTI
      this.isDisabled = true
      this.showNotification({ message: 'To many likes', type: 2});
    })
  }

  copyProfile() {
    // TODO: COPIAR LINK EN EL PORTAPAPELES O REENVIAR A WHATSAAPP, IG , FACEBOO ETC
  }


  showNotification(info: Notification) {
    this.notification = info;
    this.isNotificationVisible = true;

    setTimeout(() => {
      this.isNotificationVisible = false;
    }, 3000);
  }
}
