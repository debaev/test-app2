import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CharactersService } from "../services/characters.service";
import { fetchCharacters, fetchCharactersFail, fetchCharactersSuccess } from "./characters.action";

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
