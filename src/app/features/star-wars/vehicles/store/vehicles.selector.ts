import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehiclesStateFacade } from './vehicles.facade';
import { vehiclesFeatureKey } from './vehicles.reducer';

export const selectVehiclesFeature = createFeatureSelector<VehiclesStateFacade>(vehiclesFeatureKey);
export const vehicles$ = createSelector(selectVehiclesFeature, (state) => state);
