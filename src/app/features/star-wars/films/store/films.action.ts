import { createAction, props } from "@ngrx/store";
import { FilmsResponse } from "../models/films.model";

export const fetchFilms            = createAction('[FILMS] fetchFilms', props<{ pageNum: number }>());
export const fetchFilmsSuccess     = createAction('[FILMS] fetchFilmsSuccess', props<{ films: FilmsResponse }>());
export const fetchFilmsFail        = createAction('[FILMS] fetchFilmsFail');
