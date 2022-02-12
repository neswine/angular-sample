import { Component, Input, OnInit } from '@angular/core';
import { ListItems } from './table-list.interface'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  list: ListItems[] = [];
  @Input('list') listItems: ListItems[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
}
