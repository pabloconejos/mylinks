import { Component, OnInit } from '@angular/core';
import { UserService } from '@/app/core/services/user.service';
import { PageService } from '@/app/core/services/page.service';
import { MatDialog } from '@angular/material/dialog'; 
import { AddLinkModalComponent } from '@/app/features/admin/components/add-link-modal/add-link-modal.component';
import { LinksService } from '@/app/core/services/links.service';
import { Link, LinkImage, LinkResult, Page } from '@/app/interfaces/index';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  page!: Page;
  private dialogRef: any;
  linksImages: LinkImage[]= [];
  links: Link[] = []

  constructor(
    public userService: UserService,
    public pageService: PageService,
    public dialog: MatDialog,
    public linksService: LinksService

  ) {
    this.userService.getUserLogged().subscribe( user => {
      this.userService.user = this.userService.setUser(user)
      this.inicializarVariables()
      this.getLinks()  
    })
  }
  
  ngOnInit(): void {

    this.linksService.getLinksImages().subscribe( imgs => {
      this.linksImages = imgs
    })
    
  }

  handlerLinkEvent(ev: LinkResult) {
    const { link, action} = ev
    switch(action) {
      case 'edit':
        this.editLink(link)
        break;
      case 'delete':
        this.deleteLink(link)
        break;
    }
  }

  getLinks() {
    this.linksService.getLinks().subscribe( (l: Link[]) => {
      this.links = l
    })
  }

  inicializarVariables() {
    this.pageService.page = this.pageService.setPage(this.userService.user)
    this.page = this.pageService.page
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddLinkModalComponent, {
      width: '600px', // Puedes ajustar el ancho
      disableClose: true, // Opcional
      data: {link: null, linksImages: this.linksImages}
    });
    

    this.dialogRef.afterClosed().subscribe((linkRes: {link: Link, action: string}) => {
      const {link, action} = linkRes
      if (action == 'add') {
        this.addLink(link)
      }
    });
  }

  addLink(link: Link) {
    this.linksService.setLink(link).subscribe(r => {
      this.getLinks();
    });
  }

  editLink(link: Link) {
    console.log(link)
    this.linksService.editLink(link).subscribe( r => {
      console.log(r)
      this.getLinks()
    })
  }

  deleteLink(link: Link) {
    this.linksService.deleteLink(link).subscribe( r => {
      this.links = this.links.filter( l => l.id != link.id)
      // this.getLinks()
    })
  }
}
