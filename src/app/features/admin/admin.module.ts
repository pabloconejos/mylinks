import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { HavePageGuard } from '../../core/guards/have-page.guard';
import { PageStartConfigComponent } from './pages/page-start-config/page-start-config.component';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AddLinkModalComponent } from './components/add-link-modal/add-link-modal.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';

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
    PageStartConfigComponent,
    EmojiPickerComponent,
    AddLinkModalComponent
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
