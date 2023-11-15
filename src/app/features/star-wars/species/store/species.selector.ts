import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpeciesState, speciesFeatureKey } from './species.reducer';

export const selectSpeciesFeature = createFeatureSelector<SpeciesState>(speciesFeatureKey);
export const species$ = createSelector(selectSpeciesFeature, (state) => state);
