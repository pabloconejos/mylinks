import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { HavePageGuard } from '../../core/guards/have-page.guard';
import { PageStartConfigComponent } from './pages/page-start-config/page-start-config.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    canActivate: [HavePageGuard]
  },
  {
    path: 'create', 
    component: InitPageComponent
  },
  {
    path: 'create/start', 
    component: PageStartConfigComponent
  }

]

@NgModule({
  declarations: [
    AdminComponent,
    InitPageComponent,
    PageStartConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
