import { Component, OnInit } from '@angular/core';
import { CharactersStateFacade } from '../../store/characters.facade';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  constructor(public charactersFacade: CharactersStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.charactersFacade.fetchCharacters()
  }
}
