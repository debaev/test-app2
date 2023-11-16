import { fetchCharactersSuccess } from './../features/star-wars/characters/store/characters.action';
import { createReducer, on } from "@ngrx/store";
import { fetchFilms, fetchFilmsSuccess } from "../features/star-wars/films/store/films.action";
import { fetchCharacters } from "../features/star-wars/characters/store/characters.action";
import { fetchPlanets, fetchPlanetsSuccess } from '../features/star-wars/planets/store/planets.action';
import { fetchSpecies, fetchSpeciesSuccess } from '../features/star-wars/species/store/species.action';
import { fetchStarships, fetchStarshipsSuccess } from '../features/star-wars/starships/store/starships.action';
import { fetchVehicles, fetchVehiclesSuccess } from '../features/star-wars/vehicles/store/vehicles.action';

export const loadinFeatureKey = 'loading';

export interface LoadingState {
  loading: boolean;
}

export const initialLoadinState: LoadingState = {
  loading: false
};

export const loadingReducer = createReducer(
  initialLoadinState,

  on(fetchFilms, fetchCharacters, fetchPlanets, fetchSpecies, fetchStarships, fetchVehicles, (state) => ({
    ...state,
    loading: true
  })),
  on(fetchFilmsSuccess, fetchCharactersSuccess,fetchPlanetsSuccess, fetchSpeciesSuccess, fetchStarshipsSuccess, fetchVehiclesSuccess, (state) => ({
    ...state,
    loading: false
  })),
);
