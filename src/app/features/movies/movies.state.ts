import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module'

export const FEAUTURE_NAME = 'movies';

export const reducers: ActionReducerMap<MoviesState> = {
  
}

export interface MoviesState {

}

export interface State extends AppState {

}