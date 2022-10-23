import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { business } from '../model/Business';
import { branch} from '../model/Branch';
@Injectable({
  providedIn: 'root'
})
export class BusinesslistService {

  private baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient){ }


  getListBusiness():Observable<business[]> {
    const url = `${this.baseUrl}/api/business/status=1`;
    console.log(url);
    return this.http.get<business[]>(url);
  }

  getBusinessById(id:number):Observable<business>{
    const url = `${this.baseUrl}/api/business/${id}`;
    console.log(url);
    return this.http.get<business>(url);
  }

  updateBusiness(id:number,business:business):Observable<business>{
    const url = `${this.baseUrl}/api/business/${id}`;
    return this.http.put<business>(url,business)
  }

  getListInactiveBusiness():Observable<business[]> {
    const url = `${this.baseUrl}/api/business/status=0`;
    console.log(url);
    return this.http.get<business[]>(url);
  }

  //Modificar
  deleteBusiness(idBusiness: number): Observable<void> {
   const url = `${this.baseUrl}/api/business/${idBusiness}`;
    return this.http.delete<void>(url);
  }


  restoreBusiness(idBusiness: number,provider:business): Observable<business> {
    const url = `${this.baseUrl}/api/business/${idBusiness}`;
    return this.http.put<business>(url,provider);
  }

  //Ver sucursales
  getListBranch(idBusiness: number):Observable<branch[]>{
    const url = `${this.baseUrl}/api/branch/?businessId=${idBusiness}`;
    console.log(url);
    return this.http.get<branch[]>(url);
  }
  
}