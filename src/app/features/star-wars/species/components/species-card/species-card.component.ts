import { Component, Input } from '@angular/core';
import { FilmsResult } from '../../../films/models/films.model';
import { SpeciesResult } from '../../models/species.model';

@Component({
  selector: 'app-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.scss']
})
export class SpeciesCardComponent {
  @Input() species!: SpeciesResult

}
