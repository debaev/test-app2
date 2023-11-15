import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilmsState, filmsFeatureKey } from './films.reducer';

export const selectFilmsFeature = createFeatureSelector<FilmsState>(filmsFeatureKey);
export const films$ = createSelector(selectFilmsFeature, (state) => state);
