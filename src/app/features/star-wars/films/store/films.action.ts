import { createAction, props } from "@ngrx/store";
import { FilmsResponse } from "../models/films.model";

export const fetchFilms            = createAction('[FILMS] fetchFilms');
export const fetchFilmsSuccess     = createAction('[FILMS] fetchFilmsSuccess', props<{ films: FilmsResponse }>());
export const fetchFilmsFail        = createAction('[FILMS] fetchFilmsFail');
