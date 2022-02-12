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
      name: 'Borrowed 1',
      author: 'sss'
    }, {
      id: 2,
      author: 'sss',
      name: 'Borrowed 2'
    }, {
      id: 3,
      author: 'sss',
      name: 'Borrowed 3'
    }]
  }
}
