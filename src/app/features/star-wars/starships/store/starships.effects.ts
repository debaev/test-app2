import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { StarshipsService } from "../services/starships.service";
import { fetchStarships, fetchStarshipsFail, fetchStarshipsSuccess } from "./starships.action";

@Injectable()
export class StarshipsEffects {
  constructor(
    private actions$: Actions,
    private starshipsService: StarshipsService,
  ) { }

  fetchStarships$ = createEffect(() => this.actions$.pipe(
    ofType(fetchStarships),
    switchMap(() => {
      return this.starshipsService.getStarships().pipe(
        map((starships) => {
          return fetchStarshipsSuccess({ starships });
        },
          catchError(() => of(fetchStarshipsFail()))
        )
      );
    })
  ));
}
