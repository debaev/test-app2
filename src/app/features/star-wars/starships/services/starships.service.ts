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

  getStarships(pageNum: number): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(`${BASE_API}/starships/`, {
      params: {
        page: pageNum ? pageNum : 1
      }
    });
  }
}
