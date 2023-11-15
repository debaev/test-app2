import { Component, OnInit } from '@angular/core';
import { FilmsStateFacade } from '../../store/films.facade';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit{
  constructor(public filmsStateFacade: FilmsStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filmsStateFacade.fetchFilms()
  }

}
