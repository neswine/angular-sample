import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryListPageComponent } from './pages/library-list-page/library-list-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LibraryListPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LibraryModule { }
