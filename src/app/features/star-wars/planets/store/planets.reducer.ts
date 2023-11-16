import { createReducer, on } from "@ngrx/store";
import { PlanetsResult } from "../models/planets.model";
import { fetchPlanetsSuccess } from "./planets.action";

export const planetsFeatureKey = 'planetsStore';

export interface PlanetsState {
  count: number,
  next: string | null,
  previous: string | null,
  planets: PlanetsResult[];
}

export const initialplanetsState: PlanetsState = {
  count: 0,
  next: null,
  previous: null,
  planets: []
};

export const planetsReducer = createReducer(
  initialplanetsState,

  on(fetchPlanetsSuccess, (state, { planets }) => ({
    ...state,
    count: planets.count,
    next: planets.next,
    previous: planets.previous,
    planets: planets.results
  })),
);
