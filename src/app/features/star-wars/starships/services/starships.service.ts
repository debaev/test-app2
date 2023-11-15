import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API } from 'src/app/constants';
import { StarshipsResponse } from '../models/starships.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(`${BASE_API}/starships/`);
  }
}
