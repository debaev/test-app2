import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StarshipsStateFacade } from './starships.facade';
import { starshipsFeatureKey } from './starships.reducer';

export const selectStarshipsFeature = createFeatureSelector<StarshipsStateFacade>(starshipsFeatureKey);
export const starships$ = createSelector(selectStarshipsFeature, (state) => state);
