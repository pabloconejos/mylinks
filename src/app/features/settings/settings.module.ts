import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLayaoutComponent } from './settings-layaout.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
  {
    path: '',
    component: SettingsLayaoutComponent,
    children: [
      { path: 'user-settings', component: UserSettingsComponent },
      { path: 'page-settings', component: PageSettingsComponent },
      { path: '', redirectTo: 'user-settings', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [
    SettingsLayaoutComponent,
    PageSettingsComponent,
    UserSettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    SweetAlert2Module
]
})
export class SettingsModule { }
