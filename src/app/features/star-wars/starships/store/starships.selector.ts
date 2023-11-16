import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StarshipsStateFacade } from './starships.facade';
import { StarshipsState, starshipsFeatureKey } from './starships.reducer';

export const selectStarshipsFeature = createFeatureSelector<StarshipsState>(starshipsFeatureKey);
export const starships$ = createSelector(selectStarshipsFeature, (state) => state);
