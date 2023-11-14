import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharactersResponse, CharactersResult } from '../models/characters.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  
  getCharacters(): Observable<CharactersResult[]> {
    return this.http.get<CharactersResponse>('/api/todo/').pipe(
      map(data => data.results)
    );
  }
}
