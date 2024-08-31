import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { SelectBackgroundComponent } from './backgrounds/select-background/select-background.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [LoaderComponent, HeaderComponent, SelectBackgroundComponent, NotificationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoaderComponent, HeaderComponent, SelectBackgroundComponent, NotificationComponent]
})
export class SharedModule { }
