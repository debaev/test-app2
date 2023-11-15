import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, of, switchMap } from "rxjs";
import { fetchPlanets, fetchPlanetsFail, fetchPlanetsSuccess } from "./planets.action";
import { PlanetsService } from "../services/planets.service";

@Injectable()
export class PlanetsEffects {
  constructor(
    private actions$: Actions,
    private planetsService: PlanetsService,

  ) { }
  
  fetchCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(fetchPlanets),
    switchMap(() => {
      return this.planetsService.getPlanets().pipe(
        map((planets) => {
          return fetchPlanetsSuccess({ planets });
        },
          catchError(() => of(fetchPlanetsFail()))
        )
      );
    })
  ));
}