import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListaSucursalService {
  getSucursalesLocalhost(id:any) {
    let url = "http://localhost:8080/api/branch/?businessId="+id
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }

  getSucursales(){
    let url = "https://serviceprojectspring.herokuapp.com/api/branch"
    return this.http.get(url);
  }
}
