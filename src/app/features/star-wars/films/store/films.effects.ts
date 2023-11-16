import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FilmsService } from "../services/films.service";
import { fetchFilms, fetchFilmsFail, fetchFilmsSuccess } from "./films.action";

@Injectable()
export class FilmsEffects {
  constructor(
    private actions$: Actions,
    private filmsService: FilmsService,

  ) { }

  fetchCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(fetchFilms),
    switchMap(({pageNum}) => {
      return this.filmsService.getFilms(pageNum).pipe(
        map((films) => {
          return fetchFilmsSuccess({ films });
        },
          catchError(() => of(fetchFilmsFail()))
        )
      );
    })
  ));
}
