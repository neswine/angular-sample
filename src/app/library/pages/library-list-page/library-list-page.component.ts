import { Component, OnInit } from '@angular/core';
import { ListItems } from '../../library.interface';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-library-list-page',
  templateUrl: './library-list-page.component.html',
  styleUrls: ['./library-list-page.component.scss']
})
export class LibraryListPageComponent implements OnInit {

  list: ListItems[] = [];
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    //make api call
    this.list = this.apiService.getBooks();
  }

}