import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TableListComponent } from './components/table-list/table-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TableListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TableListComponent
  ]
})
export class SharedModule { }
