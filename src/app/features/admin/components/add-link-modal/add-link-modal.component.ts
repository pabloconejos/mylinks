import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkImage } from '../../../../interfaces/LinksImages';
import { LinkForm } from '../../../../interfaces/Link';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-link-modal',
  templateUrl: './add-link-modal.component.html',
  styleUrl: './add-link-modal.component.scss'
})
export class AddLinkModalComponent implements OnInit {

  linkForm: FormGroup;
  imageIdSelect: number = 5;
  linkFormSubmited: boolean = false
  invalidUrl: boolean = false

  constructor(
    public dialogRef: MatDialogRef<AddLinkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public images: LinkImage[],
    private fb: FormBuilder
  ) {
    this.linkForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      url: ['', Validators.required],
      image_id: [5]
    });
  }
  
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validateUrl(url: string): boolean {
    const urlPattern = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
    return urlPattern.test(url);
  }

  onSubmit() {

    this.linkFormSubmited = true
    const url = this.linkForm.get('url')!.value;

    if (this.validateUrl(url)) {
      this.invalidUrl = false
      this.linkForm.value.image_id = this.imageIdSelect
      this.dialogRef.close(this.linkForm.value);
    } else {
      this.invalidUrl = true
      console.error('Invalid URL');
    }
  }

  

  selectImage(img: LinkImage) {
    this.imageIdSelect = img.id
  }
}


