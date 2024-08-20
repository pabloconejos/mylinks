import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-link-modal',
  templateUrl: './add-link-modal.component.html',
  styleUrl: './add-link-modal.component.scss'
})
export class AddLinkModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AddLinkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
