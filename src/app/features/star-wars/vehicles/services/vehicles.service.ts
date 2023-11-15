import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API } from 'src/app/constants';
import { VehiclesResponse } from '../models/vehicles.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>(`${BASE_API}/vehicles/`);
  }
}
