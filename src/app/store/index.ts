import { planetsFeatureKey, planetsReducer, planetsState } from './../features/star-wars/planets/store/planets.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { CharactersState, charactersFeatureKey, charactersReducer } from '../features/star-wars/characters/store/characters.reducer';
import { CharactersEffects } from '../features/star-wars/characters/store/characters.effects';
import { FilmsState, filmsFeatureKey, filmsReducer } from '../features/star-wars/films/store/films.reducer';
import { FilmsEffects } from '../features/star-wars/films/store/films.effects';


export interface State {
    [charactersFeatureKey]: CharactersState,
    [filmsFeatureKey]: FilmsState,
    [planetsFeatureKey]: planetsState,
}

export const reducers: ActionReducerMap<State> = {
    [charactersFeatureKey]: charactersReducer,
    [filmsFeatureKey]: filmsReducer,
    [planetsFeatureKey]: planetsReducer,
};

export const effects = [
    CharactersEffects,
    FilmsEffects
];
