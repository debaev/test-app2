import { createAction, props } from "@ngrx/store";
import { SpeciesResponse } from "../models/species.model";

export const fetchSpecies            = createAction('[SPECIES] fetchSpecies');
export const fetchSpeciesSuccess     = createAction('[SPECIES] fetchSpeciesSuccess', props<{ species: SpeciesResponse }>());
export const fetchSpeciesFail        = createAction('[SPECIES] fetchSpeciesFail');
