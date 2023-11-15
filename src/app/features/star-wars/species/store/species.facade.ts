import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchSpecies } from './species.action';
import { species$ } from './species.selector';

@Injectable({
  providedIn: 'root'
})
export class SpeciesStateFacade {
  constructor(private store: Store,) { }

  public species$ = this.store.pipe(select(species$));

  fetchSpecies(): void {
    this.store.dispatch(fetchSpecies());
  }
}
