import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { MoviesComponent } from './containers/movies/movies.component';

// Component

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: MoviesComponent, 
    data: { 
      title: 'Peliculas'
    } 
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
