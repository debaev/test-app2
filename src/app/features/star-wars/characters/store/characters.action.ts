import { createAction, props } from "@ngrx/store";
import { CharactersResponse } from "../models/characters.model";

export const fetchCharacters            = createAction('[CHARACTERS] fetchCharacters', props<{ pageNum: number }>());
export const fetchCharactersSuccess     = createAction('[CHARACTERS] fetchCharactersSuccess', props<{ characters: CharactersResponse }>());
export const fetchCharactersFail        = createAction('[CHARACTERS] fetchCharactersFail');
