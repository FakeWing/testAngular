import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taller } from '../modelos/taller';

@Injectable({
  providedIn: 'root'
})
export class TalleresService {

  private tallerURL = "http://localhost:8089/talleres/";
  constructor(private http: HttpClient) { }

  public getTaller(id: number): Observable<Taller> {
    return this.http.get<Taller>(this.tallerURL);
  }
}
