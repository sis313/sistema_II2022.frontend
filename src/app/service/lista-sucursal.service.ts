import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListaSucursalService {
  getSucursalesLocalhost() {
    let url = "http://localhost:8080/api/branch"
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }

  getSucursales(){
    let url = "https://serviceprojectspring.herokuapp.com/api/branch"
    return this.http.get(url);
  }
}
