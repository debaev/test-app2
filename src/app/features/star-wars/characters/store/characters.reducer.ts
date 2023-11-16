import { createReducer, on } from "@ngrx/store";
import { CharactersResult } from "../models/characters.model";
import { fetchCharactersSuccess } from "./characters.action";

export const charactersFeatureKey = 'charactersStore';

export interface CharactersState {
  count: number, 
  next: string | null, 
  previous: string | null, 
  characters: CharactersResult[];
}

export const initialCharactersState: CharactersState = {
  count: 0, 
  next: null, 
  previous: null, 
  characters: []
};

export const charactersReducer = createReducer(
  initialCharactersState,

  on(fetchCharactersSuccess, (state, { characters }) => ({
    ...state,
    count: characters.count, 
    next: characters.next, 
    previous: characters.previous, 
    characters: characters.results
  })),
);
