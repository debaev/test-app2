import { Component, OnInit } from '@angular/core';
import { PlanetsStateFacade } from '../../store/planets.facade';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.scss']
})
export class PlanetsPageComponent implements OnInit {
  constructor(public planetsStateFacade: PlanetsStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.planetsStateFacade.fetchPlanets()
  }

}
