import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';

// Containers

// Components

// Services
import { MoviesService } from './api/movies.service';

// Store
import { FEAUTURE_NAME, reducers } from "./movies.state";
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    SharedModule,
    MoviesRoutingModule,
    StoreModule.forFeature(FEAUTURE_NAME, reducers),
    EffectsModule.forFeature([

    ]),
  ],
  providers: [
    MoviesService,
  ]
})
export class MoviesModule { }
