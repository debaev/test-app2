import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      import('./features/star-wars/films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/star-wars/characters/characters.module').then((m) => m.CharactersModule),
  },
  {
    path: 'species',
    loadChildren: () =>
      import('./features/star-wars/species/species.module').then((m) => m.SpeciesModule),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./features/star-wars/planets/planets.module').then((m) => m.PlanetsModule),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./features/star-wars/starships/starships.module').then((m) => m.StarshipsModule),
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./features/star-wars/vehicles/vehicles.module').then((m) => m.VehiclesModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
