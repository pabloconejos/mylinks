import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLayaoutComponent } from './settings-layaout.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { SharedModule } from "../../shared/shared.module";

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
    SharedModule
]
})
export class SettingsModule { }
