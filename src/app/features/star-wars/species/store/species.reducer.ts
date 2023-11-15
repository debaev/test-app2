import { createReducer, on } from "@ngrx/store";
import { SpeciesResult } from "../models/species.model";
import { fetchSpeciesSuccess } from "./species.action";

export const speciesFeatureKey = 'speciesStore';

export interface SpeciesState {
  count: number,
  next: string | null,
  previous: string | null,
  species: SpeciesResult[];
}

export const initialSpeciesState: SpeciesState = {
  count: 0,
  next: null,
  previous: null,
  species: []
};

export const speciesReducer = createReducer(
  initialSpeciesState,

  on(fetchSpeciesSuccess, (state, { species }) => ({
    ...state,
    count: species.count,
    next: species.next,
    previous: species.previous,
    species: species.results
  })),
);
