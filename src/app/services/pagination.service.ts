import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaginationService {

  constructor(private http: Http) {}

  getPagination(url: string): Observable<Object> {
    if(url == null) {
      url = "https://swapi.co/api/people";
    }
    return this.http.get(url)
      .map((res: Response) => res.json())
  }
}