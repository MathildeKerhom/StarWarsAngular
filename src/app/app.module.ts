import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FindCharacterComponent } from './find-character/find-character.component';
import { ErrorBarComponent } from './error-bar/error-bar.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

import { CharacterService } from './services/character.service';
import { FilmService } from './services/film.service';
import { PaginationService } from './services/pagination.service';

import { TranslationPipe } from './pipes/translationPipe';
import { HeightPipe } from './pipes/heightPipe';
import { DatePipe } from './pipes/datePipe';

import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {path: "search", component: FindCharacterComponent},
  {path: "character/:name", component: CharacterDetailsComponent},
  {path: "**", redirectTo: "/search"}
];

@NgModule({
  declarations: [
    AppComponent,
    FindCharacterComponent,
    ErrorBarComponent,
    TranslationPipe,
    HeightPipe,
    DatePipe,
    CharacterDetailsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CharacterService, FilmService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
