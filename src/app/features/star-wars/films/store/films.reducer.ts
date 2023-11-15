import { createReducer, on } from "@ngrx/store";
import { FilmsResult } from "../models/films.model";
import { fetchFilmsSuccess } from "./films.action";

export const filmsFeatureKey = 'filmsStore';

export interface FilmsState {
  films: FilmsResult[];
}

export const initialFilmsState: FilmsState = {
  films: []
};

export const filmsReducer = createReducer(
  initialFilmsState,

  on(fetchFilmsSuccess, (state, { films }) => ({
    ...state,
    films: films
  })),
);
