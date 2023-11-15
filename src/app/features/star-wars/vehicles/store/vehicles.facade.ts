import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchVehicles } from './vehicles.action';
import { vehicles$ } from './vehicles.selector';

@Injectable({
  providedIn: 'root'
})
export class VehiclesStateFacade {
  constructor(private store: Store,) { }

  public vehicles$ = this.store.pipe(select(vehicles$));

  fetchVehicles(): void {
    this.store.dispatch(fetchVehicles());
  }
}
