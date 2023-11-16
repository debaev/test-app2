import { Component, OnInit } from '@angular/core';
import { StarshipsStateFacade } from '../../store/starships.facade';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.scss']
})
export class StarshipsPageComponent implements OnInit {
  constructor(public starshipsFacade: StarshipsStateFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.starshipsFacade.fetchstarships(1)
  }
  
  onPageChange(path: string) {
    const pageNum = path[path.length - 1];
    this.starshipsFacade.fetchstarships(+pageNum);
  }
}
