import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState, loadinFeatureKey } from './index.reducer';

export const selectLoadingFeature = createFeatureSelector<LoadingState>(loadinFeatureKey);
export const loading$ = createSelector(selectLoadingFeature, (state) => state.loading);
