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
  tableConfig: { headers: string[], actions: string[] } = {
    headers: ['#', 'Name', 'Quantity'],
    actions: ['Borrow']
  };
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    //make api call
    this.getBooks();
  }

  getBooks() {
    this.apiService.getBooks()
      .subscribe((res: any) => {
        this.list = res.data;
      }, () => {
        alert('Something went wrong!');
      });
  }

  borrowClickHandle(e: any) {
    this.apiService.borrowBook(e)
      .subscribe(res => {
        alert('Book successfully borrowed');
        this.getBooks();
      }, () => {
        alert('Something went wrong!');
      });
  }

}
