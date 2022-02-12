import { Component, Input, OnInit } from '@angular/core';
import { BorrowedItem } from '../../profile.interface';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  @Input('list') list: BorrowedItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
