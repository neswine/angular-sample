import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorrowedItem } from 'src/app/profile/profile.interface';
import { ListItems } from './table-list.interface'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  list: ListItems[] = [];
  @Input('list') listItems: ListItems[] | BorrowedItem [] = [];
  @Output('borrowClick') borrorClickEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  borrowBook(item: any) {
    this.borrorClickEvent.emit(item);
  }
  
}
