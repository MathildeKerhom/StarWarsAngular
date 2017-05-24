import { Character } from '../model/character';
import { Film } from '../model/film';
import { FilmService } from '../services/film.service';

export function characterFactory(json) {
  let character = new Character(
    json.name,
    json.height,
    json.mass,
    json.hair_color,
    json.skin_color,
    json.eye_color,
    json.birth_year,
    json.gender,
    json.homeworld,
    json.films,
    json.species,
    json.vehicles,
    json.starships,
    json.url);

  return character;
}

export function charactersListFactory(array) {
  let allCharacters = new Array<Character>();

  for(let item of array) {
    allCharacters.push(new Character(
      item.name,
      item.height,
      item.mass,
      item.hair_color,
      item.skin_color,
      item.eye_color,
      item.birth_year,
      item.gender,
      item.homeworld,
      item.films,
      item.species,
      item.vehicles,
      item.starships,
      item.url)
    );
  }

  return allCharacters;
}