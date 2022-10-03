import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZonasServiceService {
  obtenerZonas() {
    console.log("Obtener todas zonas");
    return this.http.get("http://localhost:8080/api/zone");
  }

  constructor(private http: HttpClient) { }
}
