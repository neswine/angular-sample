import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BorrowedItem } from '../../profile.interface';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  @Input('list') list: BorrowedItem[] = [];
  @Output('click') onActionClick: EventEmitter<any> = new EventEmitter();
  tableConfig: { headers: string[], actions: string[] } = {
    headers: ['#', 'Author', 'Name'],
    actions: ['Return']
  }
  constructor() { }

  ngOnInit(): void {
  }

  borrowClickHandle(e: any) {
    this.onActionClick.emit(e);
  }

}
