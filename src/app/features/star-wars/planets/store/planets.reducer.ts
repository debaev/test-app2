import { createReducer, on } from "@ngrx/store";
import { PlanetsResult } from "../models/planets.model";
import { fetchPlanetsSuccess } from "./planets.action";

export const planetsFeatureKey = 'planetsStore';

export interface planetsState {
  planets: PlanetsResult[];
}

export const initialplanetsState: planetsState = {
  planets: []
};

export const planetsReducer = createReducer(
  initialplanetsState,

  on(fetchPlanetsSuccess, (state, { planets }) => ({
    ...state,
    planets: planets
  })),
);
