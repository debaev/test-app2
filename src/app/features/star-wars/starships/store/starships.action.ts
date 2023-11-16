import { createAction, props } from "@ngrx/store";
import { StarshipsResponse } from "../models/starships.model";

export const fetchStarships            = createAction('[STARSHIPS] fetchStarships', props<{ pageNum: number }>());
export const fetchStarshipsSuccess     = createAction('[STARSHIPS] fetchStarshipsSuccess', props<{ starships: StarshipsResponse }>());
export const fetchStarshipsFail        = createAction('[STARSHIPS] fetchStarshipsFail');
