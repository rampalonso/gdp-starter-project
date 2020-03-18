import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';

// Containers
import { MoviesComponent } from './containers/movies/movies.component';
// Components

// Services
import { MoviesService } from './api/movies.service';

// Store
import { FEAUTURE_NAME, reducers } from "./movies.state";
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/movies.effects';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,

    SharedModule,
    MoviesRoutingModule,
    StoreModule.forFeature(FEAUTURE_NAME, reducers),
    EffectsModule.forFeature([
      MoviesEffects
    ]),
  ],
  providers: [
    MoviesService,
  ]
})
export class MoviesModule { }
