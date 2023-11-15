import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState, charactersFeatureKey } from './characters.reducer';

export const selectCharactersFeature = createFeatureSelector<CharactersState>(charactersFeatureKey);
export const characters$ = createSelector(selectCharactersFeature, (state) => state.characters);
