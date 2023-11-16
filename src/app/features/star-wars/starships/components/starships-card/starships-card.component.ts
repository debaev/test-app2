import { Component, Input } from '@angular/core';
import { StarshipsResult } from '../../models/starships.model';

@Component({
  selector: 'app-starships-card',
  templateUrl: './starships-card.component.html',
  styleUrls: ['./starships-card.component.scss']
})
export class StarshipsCardComponent {
  @Input() starship!: StarshipsResult
}
