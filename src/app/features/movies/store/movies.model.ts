import { IMovie } from '../models/movie';
import { HttpErrorResponse } from '@angular/common/http';

export interface MoviesState {
  movies: IMovie[],
  loading: boolean;
  error?: HttpErrorResponse
}