import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  url='http://localhost:8089/api/incidencias'

  constructor(private http: HttpClient) { }

  getIncidencias():Observable<any>{
    return this.http.get(this.url);
  }

  saveIncidencia(incidencia: Incidencias):Observable<any>{
    return this.http.post(this.url, incidencia);
  }

}

export interface Incidencias{
  id:string;
  falla:string;
  electrodomestico:string;
  marca:string; 
  modelos:string;
}