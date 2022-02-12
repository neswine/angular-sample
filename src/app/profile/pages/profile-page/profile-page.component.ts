import { Component, OnInit } from '@angular/core';
import { BorrowedItem } from '../../profile.interface';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  list: BorrowedItem[] = [];
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.list = this.apiService.getBorrowedBooks();
  }

}
