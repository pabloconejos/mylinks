import { PageService } from '@/app/core/services/page.service';
import { Page } from '@/app/interfaces';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      cssBg: [ this.page.background_html_id || 1, []]
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
    console.log(value)
  }
}
