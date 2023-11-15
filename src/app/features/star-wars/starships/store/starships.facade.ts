import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchStarships } from './starships.action';
import { starships$ } from './starships.selector';

@Injectable({
  providedIn: 'root'
})
export class StarshipsStateFacade {
  constructor(private store: Store,) { }

  public starships$ = this.store.pipe(select(starships$));

  fetchstarships(): void {
    this.store.dispatch(fetchStarships());
  }
}
