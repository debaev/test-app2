import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API } from 'src/app/constants';
import { PlanetsResponse } from '../models/planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>(`${BASE_API}/planets/`);
  }
}
