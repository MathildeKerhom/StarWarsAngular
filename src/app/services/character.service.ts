import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Character } from '../model/character';
import { Observable } from 'rxjs/Observable';
import { charactersListFactory } from '../factories/character.factory';
import { characterFactory } from '../factories/character.factory';


@Injectable()
export class CharacterService {

  public name: String = "";

  constructor(private http: Http) {}

  searchCharacter(name: String): Observable<Character[]> {
    this.name = name;
    return this.http.get('https://swapi.co/api/people/?search=' + name)
      .map((res: Response) => {
        let result = res.json()['results'];
        return charactersListFactory(result);
      })
  }

  getHistory(): Observable<Character[]> {
    if(this.name === "") {
      return Observable.throw("Aucun historique de recherche.");
    } else {
      return this.searchCharacter(this.name);
    }
  }

  getCharacter(name: String): Observable<Character> {
    return this.http.get('https://swapi.co/api/people/?search=' + name)
      .map((res: Response) => {
        let result = res.json()['results'][0];
        return characterFactory(result);
      })
  }

  getAllCharacters(url: string): Observable<Character[]> {
    if(url == "") {
      url = "https://swapi.co/api/people";
    }
    return this.http.get(url)
      .map((res: Response) => {
        let result = res.json()['results'];
        return charactersListFactory(result);
      })
  }

  getCharacterSpecies(url: string): Observable<String> {
    return this.http.get(url)
      .map((res: Response) => res.json()['name']);
  }

  getCharacterHomeworld(url: string): Observable<String> {
    return this.http.get(url)
      .map((res: Response) => res.json()['name']);
  }

  getCharacterStarship(url: string): Observable<String> {
    return this.http.get(url)
      .map((res: Response) => res.json()['name']);
  }

  getCharacterVehicle(url: string): Observable<String> {
    return this.http.get(url)
      .map((res: Response) => res.json()['name']);
  }
}
