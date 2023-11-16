import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehiclesStateFacade } from './vehicles.facade';
import { VehiclesState, vehiclesFeatureKey } from './vehicles.reducer';

export const selectVehiclesFeature = createFeatureSelector<VehiclesState>(vehiclesFeatureKey);
export const vehicles$ = createSelector(selectVehiclesFeature, (state) => state);
