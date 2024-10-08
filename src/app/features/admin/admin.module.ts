import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { PageStartConfigComponent } from './pages/page-start-config/page-start-config.component';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@/app/shared/shared.module';
import { AddLinkModalComponent } from './components/add-link-modal/add-link-modal.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { HavePageGuard, HaveToCreatePageGuard } from '@/app/core/guards/index';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    canActivate: [HaveToCreatePageGuard]
  },
  {
    path: 'create', 
    component: InitPageComponent,
    canActivate: [HavePageGuard]

  },
  {
    path: 'create/start', 
    component: PageStartConfigComponent,
    // canActivate: [HavePageGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
  }

]

@NgModule({
  declarations: [
    AdminComponent,
    InitPageComponent,
    PageStartConfigComponent,
    EmojiPickerComponent,
    AddLinkModalComponent,
  ],
  imports: [
    CommonModule,
    PickerComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDialogModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]

})
export class AdminModule { }
