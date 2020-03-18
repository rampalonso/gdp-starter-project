import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'movies', loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule) }
    ]
  },
  { path: '**', redirectTo: '/movies' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
