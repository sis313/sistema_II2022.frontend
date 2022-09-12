import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { user } from '../model/User';
import { business } from '../model/Business';
@Injectable({
  providedIn: 'root'
})
export class BusinesslistService {

  private baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient){ }


  getListBusiness():Observable<business[]> {
    const url = `${this.baseUrl}adminBusiness`;
    console.log(url);
    return this.http.get<business[]>(url);
  }

  // getData(){
  //   const url = `${this.baseUrl}adminBusiness`;
  //   return this.http.get(url);
  // }
}