import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProfilePageComponent
  ]
})
export class ProfileModule { }
