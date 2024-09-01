import { PageService } from '@/app/core/services/page.service';
import { Page } from '@/app/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Notification } from '@/app/interfaces';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrl: './page-settings.component.scss'
})
export class PageSettingsComponent implements OnInit{

  pageForm!: FormGroup
  selectedBg: number = 1;
  page!: Page

  pageFormSubmitted: boolean = false

  isNotificationVisible: boolean = false
  notification!: Notification;

  constructor
  (
    private fb: FormBuilder,
    private pageService: PageService
  ) {
    this.page = this.pageService.page
  }

  ngOnInit(): void {
    this.pageForm = this.fb.group({
      pageName: [this.page.title || 'New Page', [Validators.required]],
      pageDescription: [this.page.description, []],
      mainColor: [this.page.mainColor || '#00000', []],
      secondaryColor: [this.page.secondaryColor ||'#00000', []],
      cssBg: [ this.page.background_html_id || 1, []],
      emojiBg: ['', []],
      colorBg: ['#ffffff', []],
    });

    this.selectedBg = this.page.background_html_id

  }

  get lfPage() {
    return this.pageForm.controls;
  }

  selectBg(id: number) {
    console.log(id)
    this.selectedBg = id
  }

  savePage() {
    this.pageFormSubmitted = true;
    const { value } = this.pageForm
    value.cssBg = this.selectedBg
    console.log(value.secondaryColor)
    if( this.pageForm.valid ) {
      this.pageService.updatePage(value).subscribe( response => {
        if(response.pageId) {
          this.reset()
          this.showNotification({ message: 'Success! Your changes have been saved.', type: 0 });
        }
      }, error => {
        this.showNotification({ message: 'Failed to complete the operation. Please try again.', type: 1});
      })
    }
    
  }


  reset(){
    // TODO: RECUPERAR PAGE DE LA BD CON LA NUEVA INFO
  }

  showNotification(info: Notification) {
    this.notification = info;
    this.isNotificationVisible = true;

    setTimeout(() => {
      this.isNotificationVisible = false;
    }, 3000);
  }
}