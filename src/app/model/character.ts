import { Film } from './film';

export class Character {
  public name: string;
  public height: Number;
  public mass: Number;
  public hair_color: string;
  public skin_color: string;
  public eye_color: string;
  public birth_year: string;
  public gender: string;
  public homeworld_url: string;
  public homeworld_name: String;
  public films_url: string[];
  public films: Film[] = new Array<Film>();
  public species_url: string[];
  public main_species: String;
  public vehicles_url: string[];
  public vehicles_names: String[] = new Array<String>();
  public starships_url: string[];
  public starships_names: String[] = new Array<String>();
  public url: string;

  public constructor(
    name :string,
    height: Number,
    mass: Number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld_url: string,
    films_url: string[],
    species_url: string[],
    vehicles_url: string[],
    starships_url: string[],
    url: string
    ) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld_url = homeworld_url;
    this.films_url = films_url;
    this.species_url = species_url;
    this.vehicles_url = vehicles_url;
    this.starships_url = starships_url;
    this.url = url;
  }
}