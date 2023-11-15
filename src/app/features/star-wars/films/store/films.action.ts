import { createAction, props } from "@ngrx/store";
import { FilmsResult } from "../models/films.model";

export const fetchFilms            = createAction('[FILMS] fetchFilms');
export const fetchFilmsSuccess     = createAction('[FILMS] fetchFilmsSuccess', props<{ films: FilmsResult[] }>());
export const fetchFilmsFail        = createAction('[FILMS] fetchFilmsFail');
