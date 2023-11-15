import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlanetsState, planetsFeatureKey } from './planets.reducer';

export const selectPlanetsFeature = createFeatureSelector<PlanetsState>(planetsFeatureKey);
export const planets$ = createSelector(selectPlanetsFeature, (state) => state);
