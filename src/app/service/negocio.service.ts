import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { negocio } from '../model/negocio';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  private baseUrl:string = 'https://serviceprojectspring.herokuapp.com';
  constructor(private http:HttpClient){ }

  createBusiness(negocio:negocio):Observable<negocio>{
    const url = `${this.baseUrl}/api/business`;
    return this.http.post<negocio>(url,negocio)
  }

}
