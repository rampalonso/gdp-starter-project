import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';


import { IMovie } from '../models/movie';

export const actionMoviesGetList = createAction(
  '[Movies] Get List'
);

export const actionMoviesGetListSuccess = createAction(
  '[Movies] Get List Success',
  props<{ movies: IMovie[] }>()
);

export const actionMoviesGetListError = createAction(
  '[Movies] Get List Error',
  props<{ error: HttpErrorResponse }>()
);