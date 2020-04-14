import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Movie } from '../../models/movie';
import { fromMoviesActions } from '../../store/movies.action';
import { getAllMovies } from '../../store/movies.selector';

@Component({
  selector: 'gdp-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {

  movies$ = this.store.pipe(select(getAllMovies));

  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch((fromMoviesActions.loadMovies()))
  }

  onMovieSelected(movie: Movie) {
    this.router.navigate(['/movies', movie.id])
  }

  ngOnDestroy(): void {
  }

}
