import { Injectable } from '@angular/core';
import { BorrowedItem } from '../profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  public getBorrowedBooks(): BorrowedItem[] {
    return [{
      id: 1,
      code: 123,
      name: 'Borrowed 1'
    }, {
      id: 2,
      code: 123,
      name: 'Borrowed 2'
    }, {
      id: 3,
      code: 123,
      name: 'Borrowed 3'
    }]
  }
}
