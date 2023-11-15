import { Component, OnInit } from '@angular/core';
import { SpeciesStateFacade } from '../../store/species.facade';

@Component({
  selector: 'app-species-page',
  templateUrl: './species-page.component.html',
  styleUrls: ['./species-page.component.scss']
})
export class SpeciesPageComponent implements OnInit {
  constructor(public speciesStateFacade: SpeciesStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.speciesStateFacade.fetchSpecies()
  }
}
