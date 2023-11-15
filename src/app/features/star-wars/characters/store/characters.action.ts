import { createAction, props } from "@ngrx/store";
import { CharactersResponse, CharactersResult } from "../models/characters.model";

export const fetchCharacters            = createAction('[CHARACTERS] fetchCharacters');
export const fetchCharactersSuccess     = createAction('[CHARACTERS] fetchCharactersSuccess', props<{ characters: CharactersResponse }>());
export const fetchCharactersFail        = createAction('[CHARACTERS] fetchCharactersFail');
