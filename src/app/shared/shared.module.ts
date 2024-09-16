import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { SelectBackgroundComponent } from './backgrounds/select-background/select-background.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { LinkComponent } from './link/link.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileCardSkeletonComponent } from './profile-card-skeleton/profile-card-skeleton.component';



@NgModule({
  declarations: [LoaderComponent, HeaderComponent, SelectBackgroundComponent, NotificationComponent, LinkComponent, FooterComponent, ProfileCardSkeletonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoaderComponent, HeaderComponent, SelectBackgroundComponent, NotificationComponent, LinkComponent, FooterComponent, ProfileCardSkeletonComponent]
})
export class SharedModule { }
