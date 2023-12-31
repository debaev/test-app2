import { createAction, props } from "@ngrx/store";
import { VehiclesResponse } from "../models/vehicles.model";

export const fetchVehicles            = createAction('[VEHICLES] fetchVehicles', props<{ pageNum: number }>());
export const fetchVehiclesSuccess     = createAction('[VEHICLES] fetchVehiclesSuccess', props<{ vehicles: VehiclesResponse }>());
export const fetchVehiclesFail        = createAction('[VEHICLES] fetchVehiclesFail');
