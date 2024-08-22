import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkImage } from '../../../../interfaces/LinksImages';
import { Link, LinkForm } from '../../../../interfaces/Link';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorContext } from 'rxjs/internal/util/errorContext';


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
  images!: LinkImage[]
  link: Link = {
    id: '',
    userId: '',
    pageId: '',
    linkUrl: '',
    title: '',
    description: '',
    creationDate: '',
    imageId: 0,
    imageName: '',
    imageUrl: ''
  };
  isEditing: boolean = false

  constructor(
    public dialogRef: MatDialogRef<AddLinkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {link: Link, linksImages: LinkImage[]},
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
    this.images = this.data.linksImages
    if(this.data.link) {
      this.link = this.data.link
      this.isEditing = true
      this.inicializarVariables()
    }
  }

  inicializarVariables() {
    
    this.linkForm.value.title = this.link.title
    this.linkForm.value.description = this.link.description
    this.linkForm.value.url = this.link.linkUrl
    this.linkForm.value.image_id = this.link.imageId
    this.imageIdSelect = this.link.imageId

  }

  onNoClick(): void {
    this.dialogRef.close({link: null, action: 'close'});
  }

  deleteLink() {
    this.dialogRef.close({link: this.linkForm.value, action: 'delete'});
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


