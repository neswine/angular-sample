import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibraryListPageComponent } from './library/pages/library-list-page/library-list-page.component';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';

const routes: Routes = [
  { 
    path: 'library', 
    children: [{
      path: 'list',
      component: LibraryListPageComponent
    }],
  },
  { 
    path: 'profile', 
    children: [{
      path: '',
      component: ProfilePageComponent
    }],
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
