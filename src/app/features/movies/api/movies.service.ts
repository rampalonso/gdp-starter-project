import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export const MOVIES_API = environment.FAKE_API;

@Injectable()
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }

  getMovies() {
    return this.http.get(`${MOVIES_API}/movies`);
  }

  getMovie() {

  }

  newMovie() {

  }

  activateMovie() {

  }


}
