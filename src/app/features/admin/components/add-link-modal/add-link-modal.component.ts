import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkImage } from '../../../../interfaces/LinksImages';
import { Link } from '../../../../interfaces/Link';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorContext } from 'rxjs/internal/util/errorContext';


@Component({
  selector: 'app-add-link-modal',
  templateUrl: './add-link-modal.component.html',
  styleUrl: './add-link-modal.component.scss'
})
export class AddLinkModalComponent implements OnInit {

  linkForm!: FormGroup;
  imageIdSelect: number = 5;
  linkFormSubmited: boolean = false
  invalidUrl: boolean = false
  images!: LinkImage[]
  isEditing: boolean = false

  constructor(
    public dialogRef: MatDialogRef<AddLinkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {link: Link, linksImages: LinkImage[]},
    private fb: FormBuilder
  ) {
    
    
  }
  
  ngOnInit(): void {
    
    this.inicializarVariables()
  }

  inicializarVariables() {
    const { link, linksImages} = this.data
    this.images = linksImages
    
    this.isEditing = this.data.link != null;

    this.linkForm = this.fb.group({
      id: [link?.id || ''],                      
      userId: [link?.userId || ''],              
      pageId: [link?.pageId || ''],              
      title: [link?.title, Validators.required], 
      description: [link?.description],     
      linkUrl: [link?.linkUrl, Validators.required],
      imageId: [link?.imageId || 5],
      creationDate: [link?.creationDate],
      imageName: [link?.imageName],
      imageUrl: [link?.imageUrl]
    });
    this.imageIdSelect = this.linkForm.value.imageId
  }

  onNoClick(): void {
    this.dialogRef.close({link: null, action: 'close'});
  }

  

  validateUrl(url: string): boolean {
    const urlPattern = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
    return urlPattern.test(url);
  }

  onSubmit() {

    this.linkFormSubmited = true
    const url = this.linkForm.get('linkUrl')!.value;

    if (this.validateUrl(url)) {
      this.invalidUrl = false
      this.linkForm.value.image_id = this.imageIdSelect
      
      const action = this.isEditing ? 'edit' : 'add';
      this.dialogRef.close({ link: this.linkForm.value, action });

    } else {
      this.invalidUrl = true
    }
  }

  

  selectImage(img: LinkImage) {
    this.imageIdSelect = img.id
  }
}


