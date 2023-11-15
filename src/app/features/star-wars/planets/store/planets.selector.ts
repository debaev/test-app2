import { createFeatureSelector, createSelector } from '@ngrx/store';
import { planetsState, planetsFeatureKey } from './planets.reducer';

export const selectPlanetsFeature = createFeatureSelector<planetsState>(planetsFeatureKey);
export const planets$ = createSelector(selectPlanetsFeature, (state) => state);
