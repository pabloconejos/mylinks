import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { SelectBackgroundComponent } from './backgrounds/select-background/select-background.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoaderComponent, HeaderComponent, SelectBackgroundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoaderComponent, HeaderComponent, SelectBackgroundComponent]
})
export class SharedModule { }
