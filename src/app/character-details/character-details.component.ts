import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../model/character';
import { Film } from '../model/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  private sub: any;
  private name: string = "";
  public character: Character;
  public error: String = "";

  constructor(private route: ActivatedRoute, private characterSrv: CharacterService, private filmSrv: FilmService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.characterSrv.getCharacter(this.name)
        .subscribe(
          response => {
            this.character = response; // get Character

            for (let film of this.character.films_url) { // get Character's Films
              this.filmSrv.getFilm(film)
                .subscribe(
                  response => this.character.films.push(response), 
                  error => {
                    this.error = "Impossible de récupérer tous les films pour " + this.name;
                    console.log(this.error + " : ", error);
                  }
                );
            }

            this.characterSrv.getCharacterSpecies(this.character.species_url[0]) // get character species
              .subscribe(
                response => this.character.main_species = response,
                error => {
                  this.error = "Impossible de récupérer l'espèce de " + this.name;
                  console.log(this.error + " : ", error);
                }
              );

            this.characterSrv.getCharacterHomeworld(this.character.homeworld_url) // get character's homeworld
              .subscribe(
                response => this.character.homeworld_name = response,
                error => {
                  this.error = "Impossible de récupérer la planète d'origine de " + this.name;
                  console.log(this.error + " : ", error);
                }
              );

            for (let starship of this.character.starships_url) { // get character's starships
              this.characterSrv.getCharacterStarship(starship)
                .subscribe(
                  response => this.character.starships_names.push(response),
                  error => {
                    this.error = "Impossible de récupérer tous les vaisseaux de " + this.name;
                    console.log(this.error + " : ", error);
                  }
                );
            }

            for (let vehicule of this.character.vehicles_url) { // get character's vehicles
              this.characterSrv.getCharacterVehicle(vehicule)
                .subscribe(
                  response => this.character.vehicles_names.push(response),
                  error => {
                    this.error = "Impossible de récupérer tous les véhicules de " + this.name;
                    console.log(this.error + " : ", error);
                  }
                );
            }
          },
          error => {
            this.error = "Impossible de récupérer les informations concernant " + this.name;
            console.log(this.error + " : ", error);
          }
        );
    })
  }

  displayDetails(film: Film) {
    film.display = true;

    for (let character of film.characters_url) {
      this.filmSrv.getFilmCharacter(character)
        .subscribe(
          response => film.characters_names.push(response),
          error => {
            this.error = "Impossible de récupérer le nom du personnage.";
            console.log(this.error + " : ", error);
          }
        )
    }
  }

  hideDetails(film: Film) {
    film.display = false;
  }

}
