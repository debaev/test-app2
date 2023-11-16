import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PlanetsService } from "../services/planets.service";
import { fetchPlanets, fetchPlanetsFail, fetchPlanetsSuccess } from "./planets.action";

@Injectable()
export class PlanetsEffects {
  constructor(
    private actions$: Actions,
    private planetsService: PlanetsService,

  ) { }

  fetchPlanets$ = createEffect(() => this.actions$.pipe(
    ofType(fetchPlanets),
    switchMap(({pageNum}) => {
      return this.planetsService.getPlanets(pageNum).pipe(
        map((planets) => {
          return fetchPlanetsSuccess({ planets });
        },
          catchError(() => of(fetchPlanetsFail()))
        )
      );
    })
  ));
}
