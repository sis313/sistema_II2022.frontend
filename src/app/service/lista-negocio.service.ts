import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListaNegocioService {

  constructor(private http: HttpClient) { }
  
  getNegocios(){
    let url = "http://serviceprojectspring.herokuapp.com/api/business"
    return this.http.get(url);
  }

  deleteNegocio(id: string){
    let url = "http://serviceprojectspring.herokuapp.com/api/business/"+id
    return this.http.delete(url)
  }
}
