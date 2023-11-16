import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { SpeciesService } from "../services/species.service";
import { fetchSpecies, fetchSpeciesFail, fetchSpeciesSuccess } from "./species.action";

@Injectable()
export class SpeciesEffects {
  constructor(
    private actions$: Actions,
    private speciesService: SpeciesService,

  ) { }

  fetchSpecies$ = createEffect(() => this.actions$.pipe(
    ofType(fetchSpecies),
    switchMap(({pageNum}) => {
      return this.speciesService.getSpecies(pageNum).pipe(
        map((species) => {
          return fetchSpeciesSuccess({ species });
        },
          catchError(() => of(fetchSpeciesFail()))
        )
      );
    })
  ));
}
