import { createSelector } from '@ngrx/store';

import { State, selectMoviesState } from '../movies.state';

export const selectMovies = createSelector(
  selectMoviesState,
  (state: State) => state.movies
)