import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItems } from 'src/app/shared/components/table-list/table-list.interface';
import { HttpBaseServiceService } from 'src/app/shared/services/http-base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpBaseServiceService
  ) { }

  public getBooks(): Observable<any> {
    return this.http.get('/library/view');
  }

  public borrowBook(book: ListItems): Observable<any> {
    // TODO: pass user id
    return this.http.post('/library/borrow', { id: book.id });
  }
}
