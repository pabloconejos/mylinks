import { Component } from '@angular/core';
import { PageService } from '../../../../core/services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrl: './init-page.component.scss'
})
export class InitPageComponent {

  constructor(
    private pageService: PageService,
    private router: Router
  ) { }

  createPage() {
    this.pageService.createPage().subscribe( r => {
      
      if(r.pageId) {
        this.router.navigate(['admin/create/start'])
      }
    }, error => {
      console.log(error)
    })
  }

}
