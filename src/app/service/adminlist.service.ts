import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { user } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AdminlistService {
  

  private baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient){ }


  getAdminById(id:number):Observable<user>{
    const url = `${this.baseUrl}/v1/api/user/${id}`;
    console.log(url);
    return this.http.get<user>(url);
  }

  updateProvider(idProvider:number,provider:user):Observable<user>{
    const url = `${this.baseUrl}/v1/api/user/${idProvider}`;
    return this.http.put<user>(url,provider)
  }
 
}
