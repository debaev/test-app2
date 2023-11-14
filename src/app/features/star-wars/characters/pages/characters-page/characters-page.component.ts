import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersStateFacade } from '../../store/characters.facade';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent {
  constructor(public charactersFacade: CharactersStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.charactersFacade.fetchCharacters()
  }
}
