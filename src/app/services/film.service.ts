import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Film } from '../model/film';
import { Observable } from 'rxjs/Observable';
import { filmFactory } from '../factories/film.factory';

@Injectable()
export class FilmService {

  constructor(private http: Http) {}

  getFilm(url: string): Observable<Film> {
    return this.http.get(url)
      .map((res: Response) => {
        let result = res.json();
        return filmFactory(result);
      });
  }

  getFilmCharacter(url: string): Observable<String> {
    return this.http.get(url)
      .map((res: Response) => res.json()['name'])
  }
}