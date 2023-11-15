import { ActionReducerMap } from '@ngrx/store';
import { CharactersEffects } from '../features/star-wars/characters/store/characters.effects';
import { CharactersState, charactersFeatureKey, charactersReducer } from '../features/star-wars/characters/store/characters.reducer';
import { FilmsEffects } from '../features/star-wars/films/store/films.effects';
import { FilmsState, filmsFeatureKey, filmsReducer } from '../features/star-wars/films/store/films.reducer';
import { PlanetsEffects } from '../features/star-wars/planets/store/planets.effects';
import { SpeciesEffects } from '../features/star-wars/species/store/species.effects';
import { SpeciesState, speciesFeatureKey, speciesReducer } from '../features/star-wars/species/store/species.reducer';
import { StarshipsEffects } from '../features/star-wars/starships/store/starships.effects';
import { StarshipsState, starshipsFeatureKey, starshipsReducer } from '../features/star-wars/starships/store/starships.reducer';
import { VehiclesEffects } from '../features/star-wars/vehicles/store/vehicles.effects';
import { VehiclesState, vehiclesFeatureKey, vehiclesReducer } from '../features/star-wars/vehicles/store/vehicles.reducer';
import { PlanetsState, planetsFeatureKey, planetsReducer } from './../features/star-wars/planets/store/planets.reducer';


export interface State {
    [charactersFeatureKey]: CharactersState,
    [filmsFeatureKey]: FilmsState,
    [planetsFeatureKey]: PlanetsState,
    [speciesFeatureKey]: SpeciesState,
    [starshipsFeatureKey]: StarshipsState,
    [vehiclesFeatureKey]: VehiclesState,
}

export const reducers: ActionReducerMap<State> = {
    [charactersFeatureKey]: charactersReducer,
    [filmsFeatureKey]: filmsReducer,
    [planetsFeatureKey]: planetsReducer,
    [speciesFeatureKey]: speciesReducer,
    [starshipsFeatureKey]: starshipsReducer,
    [vehiclesFeatureKey]: vehiclesReducer,
};

export const effects = [
    CharactersEffects,
    FilmsEffects,
    SpeciesEffects,
    PlanetsEffects,
    StarshipsEffects,
    VehiclesEffects
];
