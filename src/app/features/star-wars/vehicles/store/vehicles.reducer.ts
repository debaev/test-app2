import { createReducer, on } from "@ngrx/store";
import { VehiclesResult } from "../models/vehicles.model";
import { fetchVehiclesSuccess } from "./vehicles.action";

export const vehiclesFeatureKey = 'VehiclesStore';

export interface VehiclesState {
  count: number,
  next: string | null,
  previous: string | null,
  vehicles: VehiclesResult[];
}

export const initialVehiclesState: VehiclesState = {
  count: 0,
  next: null,
  previous: null,
  vehicles: []
};

export const vehiclesReducer = createReducer(
  initialVehiclesState,

  on(fetchVehiclesSuccess, (state, { vehicles }) => ({
    ...state,
    count: vehicles.count,
    next: vehicles.next,
    previous: vehicles.previous,
    vehicles: vehicles.results
  })),
);
