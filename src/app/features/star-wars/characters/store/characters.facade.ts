import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { characters$ } from './characters.selector';
import { fetchCharacters } from './characters.action';

@Injectable({
  providedIn: 'root'
})
export class CharactersStateFacade {
  constructor(private store: Store,) { }

  public characters$ = this.store.pipe(select(characters$));

  fetchCharacters(): void {
    this.store.dispatch(fetchCharacters());
  }
}
