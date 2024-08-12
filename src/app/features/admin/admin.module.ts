import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { HavePageGuard } from '../../core/guards/have-page.guard';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    canActivate: [HavePageGuard]
  },
  {
    path: 'create', 
    component: InitPageComponent
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    InitPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
