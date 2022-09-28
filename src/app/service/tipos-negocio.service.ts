import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiposNegocioService {

  constructor(private http: HttpClient) { }
  getTiposNegocio() {
    console.log("Obtener tipos negocios");
    return this.http.get("http://localhost:8080/api/typeBusiness");
  }
}
