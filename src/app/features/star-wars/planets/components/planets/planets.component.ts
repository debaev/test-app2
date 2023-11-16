import { Component, Input } from '@angular/core';
import { PlanetsResult } from '../../models/planets.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {
  @Input() planet!: PlanetsResult
}
