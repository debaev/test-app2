import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BASE_API } from 'src/app/constants';
import { PlanetsResponse, PlanetsResult } from '../models/planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }
  
  getPlanets(): Observable<PlanetsResult[]> {
    return this.http.get<PlanetsResponse>(`${BASE_API}/planets/`).pipe(
      map(data => data.results)
    );
  }
}
