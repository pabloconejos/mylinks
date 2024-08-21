import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { Page } from '../../../../interfaces/Page';
import { PageService } from '../../../../core/services/page.service';
import { MatDialog } from '@angular/material/dialog';
import { AddLinkModalComponent } from '../../components/add-link-modal/add-link-modal.component';
import { LinksService } from '../../../../core/services/links.service';
import { LinkImage } from '../../../../interfaces/LinksImages';
import { LinkForm } from '../../../../interfaces/Link';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  page!: Page;
  private dialogRef: any;
  linksImages: LinkImage[]= [];

  constructor(
    public userService: UserService,
    public pageService: PageService,
    public dialog: MatDialog,
    public linksService: LinksService

  ) {
    this.userService.getUser().subscribe( user => {
      this.userService.setUser(user)
      this.inicializarVariables()  
    })
  }
  
  ngOnInit(): void {

    this.linksService.getLinksImages().subscribe( imgs => {
      this.linksImages = imgs
    })
    
  }

  inicializarVariables() {
    this.pageService.setPage(this.userService.user)
    this.page = this.pageService.page
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddLinkModalComponent, {
      width: '600px', // Puedes ajustar el ancho
      disableClose: true, // Opcional
      data: this.linksImages
    });
    

    this.dialogRef.afterClosed().subscribe((link: {data: LinkForm, error: boolean}) => {
      const {data, error} = link
      if (!error) {
        this.linksService.setLink(data).subscribe( r => {
          console.log(r)
        })
      }
    });
  }

  


}
