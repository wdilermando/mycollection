import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Item } from '../interfaces/item';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  readonly url = `${environment.api}/api`

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(`${this.url}/items`)
      .pipe(
        take(1),
        catchError((e)=>{
          console.log(e);          
          return throwError(e)
        })
      )
  }
}
