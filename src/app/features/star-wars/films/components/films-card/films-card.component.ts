import { Component, Input } from '@angular/core';
import { FilmsResult } from '../../models/films.model';

@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.scss']
})
export class FilmsCardComponent {
  @Input() films!: FilmsResult
}
