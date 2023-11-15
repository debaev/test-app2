import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchPlanets } from './planets.action';
import { planets$ } from './planets.selector';

@Injectable({
  providedIn: 'root'
})
export class PlanetsStateFacade {
  constructor(private store: Store,) { }

  public planets$ = this.store.pipe(select(planets$));

  fetchPlanets(): void {
    this.store.dispatch(fetchPlanets());
  }
}
