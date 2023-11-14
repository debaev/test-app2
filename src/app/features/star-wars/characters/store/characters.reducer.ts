import { createReducer, on } from "@ngrx/store";
import { CharactersResult } from "../models/characters.model";
import { fetchCharactersSuccess } from "./characters.action";

export const charactersFeatureKey = 'charactersStore';

export interface CharactersState {
  characters: CharactersResult[];
}

export const initialCharactersState: CharactersState = {
  characters: []
};

export const charactersReducer = createReducer(
  initialCharactersState,

  on(fetchCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters: characters
  })),
);
