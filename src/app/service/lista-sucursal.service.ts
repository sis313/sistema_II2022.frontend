import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListaSucursalService {

  constructor(private http: HttpClient) { }

  getSucursales(){
    let url = "https://serviceprojectspring.herokuapp.com/api/city"
    return this.http.get(url);
  }
}
