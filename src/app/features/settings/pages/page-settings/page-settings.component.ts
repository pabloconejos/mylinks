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

  pageFormSubmitted: boolean = false
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.pageForm = this.fb.group({
      pageName: ['New Page', [Validators.required]],
      pageDescription: ['', []],
      mainColor: ['#00000', []],
      secondaryColor: ['#00000', []],
      cssBg: [1, []]
    });
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
