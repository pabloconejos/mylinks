import { Component } from '@angular/core';
import { PageService } from '../../../../core/services/page.service';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrl: './init-page.component.scss'
})
export class InitPageComponent {

  constructor(private pageService: PageService) { }

  createPage() {
    this.pageService.createPage().subscribe( r => {
      console.log(r)
    })
  }

}
