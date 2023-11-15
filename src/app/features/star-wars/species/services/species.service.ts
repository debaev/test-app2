import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API } from 'src/app/constants';
import { SpeciesResponse } from '../models/species.model';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecies(): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(`${BASE_API}/species/`);
  }
}
