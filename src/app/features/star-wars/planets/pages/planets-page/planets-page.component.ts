import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsStateFacade } from '../../store/planets.facade';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.scss']
})
export class PlanetsPageComponent {
  constructor(public planetsStateFacade: PlanetsStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.planetsStateFacade.fetchPlanets()
  }

}
