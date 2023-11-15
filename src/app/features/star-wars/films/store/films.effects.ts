import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, of, switchMap } from "rxjs";
import { fetchFilms, fetchFilmsFail, fetchFilmsSuccess } from "./films.action";
import { FilmsService } from "../services/films.service";

@Injectable()
export class FilmsEffects {
  constructor(
    private actions$: Actions,
    private filmsService: FilmsService,

  ) { }
  
  fetchCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(fetchFilms),
    switchMap(() => {
      return this.filmsService.getCharacters().pipe(
        map((films) => {
          return fetchFilmsSuccess({ films });
        },
          catchError(() => of(fetchFilmsFail()))
        )
      );
    })
  ));
}