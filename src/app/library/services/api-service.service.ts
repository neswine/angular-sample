import { Injectable } from '@angular/core';
import { ListItems } from 'src/app/shared/components/table-list/table-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  public getBooks(): ListItems[] {
    return [{
      id: 1,
      code: 123,
      name: 'Book 1'
    }, {
      id: 2,
      code: 123,
      name: 'Book 2'
    }, {
      id: 3,
      code: 123,
      name: 'Book 3'
    }]
  }
}
