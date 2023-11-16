import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API } from 'src/app/constants';
import { FilmsResponse } from '../models/films.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(pageNum: number): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${BASE_API}/films/`,{
      params: {
        page: pageNum ? pageNum : 1
      }
    });
  }
}
