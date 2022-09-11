import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListaNegocioService {

  constructor(private http: HttpClient) { }
  
  getNegocios(){
    let url = "https://serviceprojectspring.herokuapp.com/api/city"
    return this.http.get(url);
  }
}
