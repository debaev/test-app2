import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharactersResponse, CharactersResult } from '../models/characters.model';
import { HttpClient } from '@angular/common/http';
import { BASE_API } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  
  getCharacters(pageNum: number): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${BASE_API}/people/`, {
      params: {
        page: pageNum ? pageNum : 1
      }
    });
  }
}
