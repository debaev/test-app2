import { createAction, props } from "@ngrx/store";
import { PlanetsResult } from "../models/planets.model";

export const fetchPlanets            = createAction('[PLANETS] fetchPlanets');
export const fetchPlanetsSuccess     = createAction('[PLANETS] fetchPlanetsSuccess', props<{ planets: PlanetsResult[] }>());
export const fetchPlanetsFail        = createAction('[PLANETS] fetchPlanetsFail');
