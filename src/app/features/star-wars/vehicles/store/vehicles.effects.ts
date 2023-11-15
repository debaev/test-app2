import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { VehiclesService } from "../services/vehicles.service";
import { fetchVehicles, fetchVehiclesFail, fetchVehiclesSuccess } from "./vehicles.action";

@Injectable()
export class VehiclesEffects {
  constructor(
    private actions$: Actions,
    private vehiclesService: VehiclesService,
  ) { }

  fetchVehicles$ = createEffect(() => this.actions$.pipe(
    ofType(fetchVehicles),
    switchMap(() => {
      return this.vehiclesService.getVehicles().pipe(
        map((vehicles) => {
          return fetchVehiclesSuccess({ vehicles });
        },
          catchError(() => of(fetchVehiclesFail()))
        )
      );
    })
  ));
}
