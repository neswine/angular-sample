import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseServiceService } from 'src/app/shared/services/http-base-service.service';
import { BorrowedItem } from '../profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpBaseServiceService
  ) { }

  public getBorrowedBooks(): Observable<BorrowedItem[]> {
    return this.http.get('/user/view');
  }

  public returnBook(item: any): Observable<any> {
    return this.http.post('/library/return', { id: item.id })
  }
}
