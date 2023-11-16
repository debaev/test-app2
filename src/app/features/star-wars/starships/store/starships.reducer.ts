import { createReducer, on } from "@ngrx/store";
import { StarshipsResult } from "../models/starships.model";
import { fetchStarshipsSuccess } from "./starships.action";

export const starshipsFeatureKey = 'starshipsStore';

export interface StarshipsState {
  count: number,
  next: string | null,
  previous: string | null,
  starships: StarshipsResult[];
}

export const initialStarshipsState: StarshipsState = {
  count: 0,
  next: null,
  previous: null,
  starships: []
};

export const starshipsReducer = createReducer(
  initialStarshipsState,

  on(fetchStarshipsSuccess, (state, { starships }) => ({
    ...state,
    count: starships.count,
    next: starships.next,
    previous: starships.previous,
    starships: starships.results
  })),
);
