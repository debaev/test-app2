import { createAction, props } from "@ngrx/store";
import { PlanetsResponse } from "../models/planets.model";

export const fetchPlanets            = createAction('[PLANETS] fetchPlanets', props<{ pageNum: number }>());
export const fetchPlanetsSuccess     = createAction('[PLANETS] fetchPlanetsSuccess', props<{ planets: PlanetsResponse }>());
export const fetchPlanetsFail        = createAction('[PLANETS] fetchPlanetsFail');
