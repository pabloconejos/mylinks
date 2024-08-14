import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { HavePageGuard } from '../../core/guards/have-page.guard';
import { PageStartConfigComponent } from './pages/page-start-config/page-start-config.component';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { ReactiveFormsModule } from '@angular/forms';

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
    EmojiPickerComponent
  ],
  imports: [
    CommonModule,
    PickerComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añade esta línea

})
export class AdminModule { }
