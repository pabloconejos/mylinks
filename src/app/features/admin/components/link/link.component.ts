import { Link, LinkImage, LinkResult } from '@/app/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLinkModalComponent } from '../add-link-modal/add-link-modal.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

  @Input()
  link!: Link;
  @Input()
  linksImages!: LinkImage[]
  @Output() 
  linkEvent = new EventEmitter<LinkResult>();

  private dialogRef: any;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialogRef = this.dialog.open(AddLinkModalComponent, {
      width: '600px', // Puedes ajustar el ancho
      disableClose: true, // Opcional
      data: {link: this.link, linksImages:this.linksImages}
    });
    

    this.dialogRef.afterClosed().subscribe((linkRes: LinkResult) => {
            
      const { link } = linkRes
      if(link) {
        this.linkEvent.emit(linkRes)
      } else {
        console.log('Closed without actions!')
      }
      
    });
  }

}


