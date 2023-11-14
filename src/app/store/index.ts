import { ActionReducerMap } from '@ngrx/store';
import { CharactersState, charactersFeatureKey, charactersReducer } from '../features/star-wars/characters/store/characters.reducer';
import { CharactersEffects } from '../features/star-wars/characters/store/characters.effects';


export interface State {
    [charactersFeatureKey]: CharactersState,
}

export const reducers: ActionReducerMap<State> = {
    [charactersFeatureKey]: charactersReducer,
};

export const effects = [
    CharactersEffects
];
