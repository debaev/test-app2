import { Component, Input } from '@angular/core';
import { VehiclesResult } from '../../models/vehicles.model';

@Component({
  selector: 'app-vehicles-card',
  templateUrl: './vehicles-card.component.html',
  styleUrls: ['./vehicles-card.component.scss']
})
export class VehiclesCardComponent {
  @Input() vehicle!: VehiclesResult
}
