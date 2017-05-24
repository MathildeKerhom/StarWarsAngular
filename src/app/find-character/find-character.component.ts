import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../model/character';

@Component({
  selector: 'app-find-character',
  templateUrl: './find-character.component.html',
  styleUrls: ['./find-character.component.css']
})
export class FindCharacterComponent implements OnInit {
  public error: String = "";
  public search: String = "";
  public results: Object[] = [];
  public allCharacters: Character[];
  public currentPage: String = "1";
  public paginationUrl: string = "";

  constructor(private characterSrv: CharacterService) { }

  ngOnInit() {
    this.characterSrv.getHistory()
    .subscribe(
      result => {
        this.results = result;
        this.search = this.characterSrv.name;
      },
      error => console.log(error)
    );

    this.getAllCharacters(this.paginationUrl);
    
  }

  searchCharacter() {
    this.error = "";
    if(this.search.length < 2) {
      this.error = "Le nom du personnage doit contenir au moins 2 caractères."
    } else {
      this.characterSrv.searchCharacter(this.search)
        .subscribe(
          result => {
            if (result.length == 0) {
              this.error = "Aucun personnage ne correspond à la recherche '" + this.search + "'";
            } else {
              this.results = result;
            }
          },
          error => {
            this.error = "Impossible de retourner les personnages correspondant à la recherche";
            console.log(this.error + " : ", error);
          }
        );
    }
  }

  getAllCharacters(url: string) {
    this.error = "";
    this.paginationUrl = url;
    this.characterSrv.getAllCharacters(this.paginationUrl)
      .subscribe(
        result => this.allCharacters = result,
        error => {
          this.error = "Impossible de retourner la liste des personnages.";
          console.log(this.error + " : ", error);
        }
      );
  }

  checkInput() {
    if(this.search.length == 0) {
      this.results = [];
    }
  }

  changePage(url: string) {
    this.paginationUrl = url;
    this.getAllCharacters(this.paginationUrl);
  }

}
