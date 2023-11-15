import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { films$ } from './films.selector';
import { fetchFilms } from './films.action';

@Injectable({
  providedIn: 'root'
})
export class FilmsStateFacade {
  constructor(private store: Store,) { }

  public films$ = this.store.pipe(select(films$));

  fetchFilms(): void {
    this.store.dispatch(fetchFilms());
  }
}
