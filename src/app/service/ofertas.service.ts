import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private urlApi = 'assets/ofertas.json'

  constructor(private http: HttpClient) {

   }

   getOferts():Observable<any[]>{
    return this.http.get<any[]>(this.urlApi);
  }
}
