import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListaNegocioService {

  constructor(private http: HttpClient) { }
  
  getNegocios(){
    let url = "https://serviceprojectspring.herokuapp.com/api/business"
    //let url="http://localhost:8080/api/business"
    return this.http.get(url);
  }

  deleteNegocio(id: string){
    let url = "http://serviceprojectspring.herokuapp.com/api/business/"+id
    return this.http.delete(url)
  }
  getNegociosDeUsuarioPorID(id:any){
    return this.http.get("http://localhost:8080/api/business/?userId="+id);
  }
}
