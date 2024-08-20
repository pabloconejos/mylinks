import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { Page } from '../../../../interfaces/Page';
import { PageService } from '../../../../core/services/page.service';
import { MatDialog } from '@angular/material/dialog';
import { AddLinkModalComponent } from '../../components/add-link-modal/add-link-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  page!: Page;
  private dialogRef: any;

  constructor(
    public userService: UserService,
    public pageService: PageService,
    public dialog: MatDialog
  ) {
    this.userService.getUser().subscribe( user => {
      this.userService.setUser(user)
      this.inicializarVariables()  
    })
  }
  
  ngOnInit(): void {
    
  }

  inicializarVariables() {
    this.pageService.setPage(this.userService.user)
    this.page = this.pageService.page
  }

  handlerBgMode() {

    switch (this.page.bg_mode) {
      case 1:
        this.createBackgroundEmoji()
        break;
      case 2:
        this.createBackgroundCss()
        break;
      default:
        this.createBackgroundCss()
        break;
    }
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddLinkModalComponent, {
      width: '400px', // Puedes ajustar el ancho
      height: '300px', // Puedes ajustar la altura (opcional)
      data: { name: 'some data' },
      disableClose: true // Opcional
    });
    

    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
     
    });
  }

  createBackgroundEmoji() {
    
  }

  createBackgroundCss() {
    

  }

  craeteLinks() {

  }

  createTitle() {

  }

}
