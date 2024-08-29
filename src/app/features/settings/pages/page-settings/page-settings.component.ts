import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrl: './page-settings.component.scss'
})
export class PageSettingsComponent implements OnInit{


  constructor() {}

  ngOnInit(): void {
    
  }

  selectBg(id: number) {
    console.log(id)
  }

}
