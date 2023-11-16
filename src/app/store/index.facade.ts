import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loading$ } from './index.selector';

@Injectable({
  providedIn: 'root'
})
export class LoadingStateFacade {
  constructor(private store: Store) { }

  public loading$ = this.store.pipe(select(loading$));
}
