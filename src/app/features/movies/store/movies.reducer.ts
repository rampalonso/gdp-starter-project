import { Action, createReducer, on } from '@ngrx/store';

import { MoviesState } from './movies.model'

import {
  actionMoviesGetList, 
  actionMoviesGetListSuccess,
  actionMoviesGetListError,
} from './movies.actions'

export const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
}

const reducer = createReducer(
  initialState,
  on(actionMoviesGetList, (state) => ({ 
    ...state,
    loading: true,
    error: null,
  })),
  on(actionMoviesGetListSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false
  })),
  on(actionMoviesGetListError, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
)

export function moviesReducer(
  state: MoviesState | undefined,
  action: Action
) {
  return reducer(state, action);
}