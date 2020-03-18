import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators';

import {
  actionMoviesGetList,
  actionMoviesGetListSuccess,
  actionMoviesGetListError,
} from './movies.actions';
import { MoviesService } from '../api/movies.service'

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private service: MoviesService
  ) { }

  retrieveMovies = createEffect(() => ({ debounce = 500 } = {}) =>
    this.actions$.pipe(
      ofType(actionMoviesGetList),
      debounceTime(debounce),
      switchMap(_ => 
        this.service.getMovies().pipe(
          map((movies: any) => actionMoviesGetListSuccess({ movies })),
          catchError(error => of(actionMoviesGetListError({ error })))
        )
      )
    )
  );
}