import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BASE_API } from 'src/app/constants';
import { FilmsResponse, FilmsResult } from '../models/films.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  
  getCharacters(): Observable<FilmsResult[]> {
    return this.http.get<FilmsResponse>(`${BASE_API}/films/`).pipe(
      map(data => data.results)
    );
  }
}
