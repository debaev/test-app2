import { Component, OnInit } from '@angular/core';
import { VehiclesStateFacade } from '../../store/vehicles.facade';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.scss']
})
export class VehiclesPageComponent implements OnInit {
  constructor(public vehicleFacade: VehiclesStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.vehicleFacade.fetchVehicles()
  }
}
