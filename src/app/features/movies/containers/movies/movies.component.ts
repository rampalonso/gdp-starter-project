import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from '../../api/movies.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MoviesState } from '../../store/movies.model';
import { State } from '../../movies.state';
import { selectMovies } from '../../store/movies.selector';
import { actionMoviesGetList } from '../../store/movies.actions';

@Component({
  selector: 'gdp-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {

  movies$: Observable<MoviesState> = this.store.pipe(select(selectMovies));

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(actionMoviesGetList())
  }

}
