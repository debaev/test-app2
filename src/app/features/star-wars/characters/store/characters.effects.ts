import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, of, switchMap } from "rxjs";
import { fetchCharacters, fetchCharactersFail, fetchCharactersSuccess } from "./characters.action";
import { CharactersService } from "../services/characters.service";

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactersService: CharactersService,
  ) { }
  
  fetchCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(fetchCharacters),
    switchMap(() => {
      return this.charactersService.getCharacters().pipe(
        map((characters) => {
          return fetchCharactersSuccess({ characters });
        },
          catchError(() => of(fetchCharactersFail()))
        )
      );
    })
  ));
}